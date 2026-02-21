
import { GoogleGenAI } from "@google/genai";

export const generateMarketingStrategy = async (niche: string, target: string) => {
  try {
    // Initializing with the environment variable as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Carlos, um seguidor quer "Viver do Digital". O nicho dele é "${niche}" e o público-alvo é "${target}". Dê a ele 3 passos práticos e matadores para começar a faturar hoje. Seja direto, motivador e use termos do mercado como ROI, Lead, Copy e Conversão.`,
      config: {
        systemInstruction: "Você é Carlos Guerra, mentor de Marketing Digital focado em resultados reais. Seu lema é 'Viver do Digital não é sorte, é estratégia'. Você não enrola, você dá o caminho das pedras com autoridade e incentiva a ação imediata.",
        temperature: 0.8,
      },
    });

    // Accessing .text as a property, not a method.
    return response.text || "Não consegui gerar sua estratégia agora. O sinal digital está instável, tente novamente!";
  } catch (error) {
    console.error("Erro no Mentor IA:", error);
    return "Ocorreu um erro ao conectar com o servidor. Verifique sua conexão e tente novamente.";
  }
};
