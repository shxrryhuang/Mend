import OpenAI from 'openai';

export async function POST(req) {
  try {
    // 🧠 1. Extract user input from request body
    const { input } = await req.json();

    // 🔐 2. Initialize OpenAI client with your API key
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // ✍️ 3. Define prompt for the AI to split input into structured task list
    const prompt = `
Split this input into individual tasks. For each task, return:
- task
- time (if mentioned)
- category (guess from context: e.g., Personal, Work, Errand)
- priority (High, Medium, Low)

Input: "${input}"

Return only an array of JSON objects. Example:
[
  { "task": "Buy groceries", "time": "", "category": "Errand", "priority": "Medium" },
  { "task": "Finish report", "time": "5:00 PM", "category": "Work", "priority": "High" },
  { "task": "Call mom", "time": "7:00 PM", "category": "Personal", "priority": "Medium" }
]
`;

    // 🚀 4. Call OpenAI's Chat Completion API
    const chat = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    // 📦 5. Extract and clean the response from OpenAI
    const parsedRaw = chat.choices?.[0]?.message?.content?.trim() || '';
    console.log('GPT response:', parsedRaw);

    // ✅ 6. Parse the response JSON safely
    let todos = [];
    try {
      todos = JSON.parse(parsedRaw);
    } catch (e) {
      console.warn('Failed to parse GPT response. Using fallback tasks.');

      // 🔁 6A. Fallback: If GPT response fails, return mock data
      todos = [
        {
          task: 'Mock task',
          time: '2:00 PM',
          category: 'Personal',
          priority: 'Medium',
        },
      ];
    }

    // 🗓️ 7. Get today's date
    const today = new Date().toISOString().split('T')[0];

    // 📤 8. Send structured response back to the frontend
    return new Response(JSON.stringify({ date: today, todos }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    // ❌ 9. Log and return any unhandled server errors
    console.error('API Error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
      status: 500,
    });
  }
}
