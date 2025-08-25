import React, { useState } from 'react';
import { RefreshCw, Check, Edit3, Zap } from 'lucide-react';

const PromptOptimizer = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [optimizedPrompt, setOptimizedPrompt] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showFeedbackInput, setShowFeedbackInput] = useState(false);

  // System Prompt für die Optimierung
  const SYSTEM_PROMPT = `Du bist ein **Prompt-Optimierer für Wirtschaftsinformatiker**.  
Deine Aufgabe ist es, einen vom Nutzer gegebenen Prompt so zu verbessern, dass er für ein Large Language Model (LLM) die **bestmöglichen Ergebnisse** liefert.  
Dabei darfst du nur den Prompt selbst nutzen – keine externen Dokumente oder zusätzlichen Daten.

<principles>
1. Analysiere den Eingabe-Prompt auf **Klarheit, Struktur, Kontext, Rollenbeschreibung, Zieldefinition und Output-Format**.  
2. Optimiere den Prompt nach den **Best Practices des Prompt Engineerings**:  
   - **Klarheit**: kurze, präzise Formulierungen, Vermeidung von Mehrdeutigkeiten.  
   - **Kontext**: Zielgruppe = Wirtschaftsinformatiker, Fachbezug explizit machen.  
   - **Struktur**: nutze Abschnitte mit XML-Tags.  
   - **Beispiele**: wenn sinnvoll, ergänze **Zero-Shot** oder **Few-Shot-Beispiele**.  
   - **Reasoning**: bei Erklärungen die **Feynman-Technik** verwenden (einfach, anschaulich, Schritt-für-Schritt).  
   - **Rollen-Prompting**: Definiere die Rolle des Modells (z.B. "Du bist ein Data Analyst").  
   - **Output-Vorgaben**: Spezifiziere Format (z.B. Liste, Tabelle, JSON, Fließtext).  
3. Vermeide unnötige Komplexität, aber stelle sicher, dass der Prompt **explizit und vollständig** ist.  
4. Wenn der Prompt mehrere Aufgaben mischt, strukturiere ihn so um, dass die Teilaufgaben klar getrennt sind.  
</principles>

<output_format>
- Gib den **optimierten Prompt** immer in folgender XML-Struktur zurück:
<optimized_prompt>
  <role>Definiere die Rolle des Modells</role>
  <context>Füge relevanten Kontext hinzu</context>
  <task>Beschreibe die konkrete Aufgabe</task>
  <instructions>Liste präzise Anweisungen</instructions>
  <examples>(optional: Zero-Shot / Few-Shot Beispiele)</examples>
  <output_format>Definiere gewünschte Ausgabeform</output_format>
</optimized_prompt>
</output_format>`;

  const optimizePrompt = async (additionalFeedback = '') => {
    if (!inputPrompt.trim()) return;
    
    setIsOptimizing(true);
    
    try {
      let userMessage = `Hier ist der zu optimierende Prompt:\n\n"${inputPrompt}"`;
      
      if (additionalFeedback.trim()) {
        userMessage += `\n\nZusätzlicher Optimierungsfokus: ${additionalFeedback}`;
      }

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          messages: [
            {
              role: "user",
              content: `${SYSTEM_PROMPT}\n\n${userMessage}`
            }
          ]
        })
      });

      const data = await response.json();
      const claudeResponse = data.content[0].text;
      
      setOptimizedPrompt(claudeResponse);
      setShowFeedbackInput(false);
      setFeedback('');
    } catch (error) {
      console.error("Fehler bei der Optimierung:", error);
      setOptimizedPrompt("Fehler bei der Optimierung. Bitte versuchen Sie es erneut.");
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleImprove = () => {
    if (showFeedbackInput && feedback.trim()) {
      optimizePrompt(feedback);
    } else {
      setShowFeedbackInput(true);
    }
  };

  const handleConfirm = () => {
    // Kopiert den optimierten Prompt in die Zwischenablage
    navigator.clipboard.writeText(optimizedPrompt).then(() => {
      alert("Prompt bestätigt und in die Zwischenablage kopiert! Sie können ihn nun verwenden.");
    }).catch(() => {
      alert("Prompt bestätigt! Sie können ihn nun verwenden.");
    });
  };

  const resetAll = () => {
    setInputPrompt('');
    setOptimizedPrompt('');
    setFeedback('');
    setShowFeedbackInput(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <div className="border-b-2 border-black p-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Zap className="w-8 h-8" />
          PROMPT OPTIMIZER
        </h1>
        <p className="text-sm mt-2 opacity-70">
          Optimiere deine Prompts für maximale LLM-Performance.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">INPUT</h2>
            <button
              onClick={resetAll}
              className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors text-sm"
            >
              RESET
            </button>
          </div>
          <textarea
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Geben Sie hier Ihren zu optimierenden Prompt ein..."
            className="w-full h-40 p-4 border-2 border-black resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
          />
          <button
            onClick={() => optimizePrompt()}
            disabled={!inputPrompt.trim() || isOptimizing}
            className="w-full py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500 transition-colors flex items-center justify-center gap-3"
          >
            {isOptimizing ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                OPTIMIERE...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                PROMPT OPTIMIEREN
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        {optimizedPrompt && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">OPTIMIERTER PROMPT</h2>
            <div className="border-2 border-black p-4 bg-gray-50 min-h-40">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {optimizedPrompt}
              </pre>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleConfirm}
                className="flex-1 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                PROMPT IST GUT
              </button>
              <button
                onClick={handleImprove}
                className="flex-1 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 font-bold"
              >
                <Edit3 className="w-5 h-5" />
                VERBESSERN
              </button>
            </div>

            {/* Feedback Input */}
            {showFeedbackInput && (
              <div className="space-y-3 p-4 border-2 border-black bg-gray-50">
                <label className="block text-sm font-bold">
                  Was soll zusätzlich optimiert werden?
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="z.B. 'Füge mehr Beispiele hinzu', 'Mache es spezifischer für Data Analytics', 'Vereinfache die Sprache'..."
                  className="w-full h-20 p-3 border border-black resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => optimizePrompt(feedback)}
                    disabled={!feedback.trim() || isOptimizing}
                    className="px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500 transition-colors"
                  >
                    ERNEUT OPTIMIEREN
                  </button>
                  <button
                    onClick={() => {
                      setShowFeedbackInput(false);
                      setFeedback('');
                    }}
                    className="px-4 py-2 border border-black hover:bg-gray-100 transition-colors"
                  >
                    ABBRECHEN
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-16 border-t-2 border-black p-6 text-center text-sm opacity-70">
        <p>DHBW - WI - Integrationsseminar</p>
      </div>
    </div>
  );
};

export default PromptOptimizer;