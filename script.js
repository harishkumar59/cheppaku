import { Client } from "@gradio/client";

async function generateVideo() {
    const client = await Client.connect("THUDM/CogVideoX-5B-Space");

        const prompt = document.getElementById("prompt").value;
            const imageFile = document.getElementById("image").files[0];
                const videoFile = document.getElementById("video").files[0];

                    if (!prompt || !imageFile) {
                            alert("Please enter a prompt and upload an image.");
                                    return;
                                        }

                                            const imageBlob = await imageFile.arrayBuffer();
                                                const videoBlob = videoFile ? await videoFile.arrayBuffer() : null;

                                                    const result = await client.predict("/generate", {
                                                            prompt: prompt,
                                                                    image_input: imageBlob,
                                                                            video_input: videoBlob,
                                                                                    video_strength: 0.1,
                                                                                            seed_value: -1,
                                                                                                    scale_status: true,
                                                                                                            rife_status: true,
                                                                                                                });

                                                                                                                    document.getElementById("outputVideo").src = URL.createObjectURL(result.data[0]);
                                                                                                                    }