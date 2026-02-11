# Next.js + AI SDK Example

This is a Next.js project that serves as an example of how to use the Vercel AI SDK to generate response based on human instructions. The project is built using the Next.js framework and the AI SDK from the [ai/ai-sdk](https://github.com/ai/ai-sdk) repository.

## Project Overview

The project consists of three main components:

1. **UI Components**: The project includes various UI components for different use cases such as text generation, chat, and streaming. These components are located in the `src/app/ui` directory and are built using Next.js UI components and Tailwind CSS. The UI components include:
   - **Text Generation**: This component allows users to input a prompt and generate text based on that prompt. The generated text is displayed in real-time as the AI model processes the prompt.
   - **Chat**: This component allows users to have a conversation with the AI model. Users can input messages and the AI model will respond in real-time. The conversation history is displayed in a chat window.
   - **Streaming**: This component allows users to input a prompt and generate text based on that prompt in real-time. The generated text is displayed in real-time as the AI model processes the prompt.

2. **API Routes**: The project includes API routes for generating text based on human instructions. These routes are located in the `src/app/api` directory and are built using Next.js API routes and the AI SDK. The API routes include:
   - **Text Generation**: This route allows users to generate text based on a prompt. The route takes a prompt as input and returns the generated text as output.
   - **Chat**: This route allows users to have a conversation with the AI model. The route takes a message as input and returns the AI model's response as output. The conversation history is stored in a database.
   - **Streaming**: This route allows users to generate text based on a prompt in real-time. The route takes a prompt as input and returns the generated text as output in real-time.

3. **Configuration**: The project includes configuration files for Next.js, ESLint, and Tailwind CSS. These files are located in the root directory and are used to configure the project's build process and linting.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone [https://github.com/your-username/nextjs-ai-sdk-example.git]`(https://github.com/your-username/nextjs-ai-sdk-example.git)`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:3000`

## Usage

Once the development server is running, you can use the different UI components to generate text based on human instructions. The components are located in the `src/app/ui` directory and can be accessed through the following routes:
- **Text Generation**: `http://localhost:3000/text-generation`
- **Chat**: `http://localhost:3000/chat`
- **Streaming**: `http://localhost:3000/streaming`

To use the API routes, you can make requests to the following endpoints:
- **Text Generation**: `http://localhost:3000/api/generate-text`
- **Chat**: `http://localhost:3000/api/chat`
- **Streaming**: `http://localhost:3000/api/streaming`