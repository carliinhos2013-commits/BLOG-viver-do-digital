
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const generateMarketingStrategy = async (niche: string, target: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Crie uma estratégia de marketing digital curta e matadora para o nicho de ${niche} focada no público ${target}. Use um tom profissional mas inspirador, como o Carlos Guerra falaria.`,
      config: {
        systemInstruction: "Você é Carlos Guerra, um mentor de marketing digital experiente que ajuda pessoas a 'Viver do Digital'. Seu estilo é direto, motivador e baseado em resultados reais. Use termos como 'ROI', 'Escalabilidade', 'Liberdade' e 'Construção de Ativo'.",
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, não consegui gerar a estratégia agora. Tente novamente em instantes.";
  } catch (error) {
    console.error("Erro no Gemini:", error);
    return "Ocorreu um erro ao conectar com o meu cérebro digital. Verifique sua conexão.";
  }
};
