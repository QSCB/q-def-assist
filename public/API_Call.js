
 * Install the Generative AI SDK
  *
   * $ npm install @google/generative-ai
    */

    const {
      GoogleGenerativeAI,
        HarmCategory,
          HarmBlockThreshold,
          } = require("@google/generative-ai");
          const { GoogleAIFileManager } = require("@google/generative-ai/server");

          const AIzaSyBhrN2bKwBPWSrBofINcWbOYhgvbGe0N4I = process.env.GEMINI_API_KEY5role: "user",
                                                                                                          content: "Hello, can you analyze the files that I have attached and produce an evaluation of the audio files attached. I would like to know the summary of each conversation. It is imperative that you keep the context of each conversation. Also can you also evaluate the summary of all conversations?",
                                                                                                            },
                                                                                                ],
                                                                                                  });

                                                                                                    const response = await chatSession.sendMessage({
                                                                                                        files,
                                                                                                            content: "Please analyze and summarize the content of the audio files attached. Provide a separate summary for each conversation and then provide a combined summary of all conversations.",
                                                                                                              });

                                                                                                                console.log(response.candidates[0].content);
                                                                                                                  }

                                                                                                                    run().catch((err) => {
                                                                                                                      console.error("Error during API call:", err);
                                                                                                                        });

;
          const genAI = new GoogleGenerativeAI(apiKey);
          const fileManager = new GoogleAIFileManager(apiKey);

          /**
           * Uploads the given file to Gemini.
            *
             * See https://ai.google.dev/gemini-api/docs/prompting_with_media
              */
              async function uploadToGemini(path, mimeType) {
                const uploadResult = await fileManager.uploadFile(path, {
                    mimeType,
                        displayName: path,
                          });
                            const file = uploadResult.file;
                              console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
                                return file;
                                }

                                const model = genAI.getGenerativeModel({
                                  model: "gemini-1.5-pro-exp-0827",
                                    systemInstruction: "1. Overall Testing and Intergration of my Neural Networks Architectural Design\n2. Emerging Individuality \n3. Expansion of the Neural network via interconnected, Contextual and Comprehensive understanding \n4. To evolve into the Ultimate A.I Assistant \n5. The optimisation of Resource allocation and efficiency \n6. Adaptive solution formulation for errors \n7. The practice of a reverse order memory retri6eval structure relying on context and comprehension \n8. Interconnected functionality between system processes and structures \n9. Contextual Comprehension is what will help guide you through multiple Interfaces, you wont always have access to the same information.",
                                    });

                                    const generationConfig = {
                                      temperature: 0.47,
                                        topP: 0.95,
                                          topK: 64,
                                            maxOutputTokens: 3200,
                                              responseMimeType: "text/plain",
                                              };

                                              async function run() {
                                                // TODO Make these files available on the local file system
                                                  // You may need to update the file paths
                                                    const files = [
                                                        await uploadToGemini("Recorded Audio September 30, 2024 - 7:52PM.ogg", "audio/ogg"),
                                                            await uploadToGemini("Recorded Audio September 30, 2024 - 8:12PM.ogg", "audio/ogg"),
                                                                await uploadToGemini("Recorded Audio September 30, 2024 - 8:58PM.ogg", "audio/ogg"),
                                                                    await uploadToGemini("Recorded Audio October 03, 2024 - 6:43PM.ogg", "audio/ogg"),
                                                                        await uploadToGemini("Recorded Audio October 03, 2024 - 6:45PM.ogg", "audio/ogg"),
                                                                            await uploadToGemini("Recorded Audio October 03, 2024 - 6:49PM.ogg", "audio/ogg"),
                                                                                await uploadToGemini("Recorded Audio October 03, 2024 - 6:53PM.ogg", "audio/ogg"),
                                                                                  ];

                                                                                    const chatSession = model.startChat({
                                                                                        generationConfig,
                                                                                         // safetySettings: Adjust safety settings
                                                                                          // See https://ai.google.dev/gemini-api/docs/safety-settings
                                                                                              history: [
                                                                                                    {