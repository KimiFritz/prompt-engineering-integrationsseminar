# **Prompt Engineering – Eine umfassende Analyse der Schlüsseldisziplin für generative KI**

### **Einführung: Prompt Engineering als Schlüsseldisziplin der Mensch-KI-Kollaboration**

Prompt Engineering ist die systematische Praxis, Eingaben (Prompts) für generative KI-Lösungen zu gestalten und zu optimieren, um die gewünschten, präzisen und hochwertigen Ausgaben zu erzielen.1 Es fungiert als die kritische Schnittstelle, die eine Brücke zwischen der menschlichen Absicht und der Leistungsfähigkeit großer Sprachmodelle (LLMs) schlägt.1 Während frühere Deep-Learning-Modelle stark auf strukturierte Datensätze angewiesen waren, können moderne Foundation Models massive und vielfältige Mengen unstrukturierter Daten verarbeiten, was Prompt Engineering zu einer unverzichtbaren Fähigkeit macht, um diese Fähigkeit zu nutzen.2

Mit der explosionsartigen Verbreitung generativer KI-Tools, angeführt von Modellen wie ChatGPT, hat sich Prompt Engineering von einer Nischendisziplin für Entwickler und Forscher zu einer kritischen Fähigkeit für Endnutzer in nahezu jeder Branche entwickelt.1 Ein effektives Prompting ermöglicht es, die Kontrolle über die KI-Interaktion zu erhöhen, die Qualität der Ergebnisse zu maximieren und sogar die Neigung der Modelle zu verringern, voreingenommene oder falsche Informationen zu „halluzinieren“.2 Prompt Engineers, die oft als Brücke zwischen Endnutzern und dem Sprachmodell agieren, identifizieren die optimalen Formate, Phrasen und Wörter, um die KI zu einem aussagekräftigen und relevanten Dialog zu führen.1

Der vorliegende Bericht führt den Leser durch die fundamentalen Konzepte und Techniken des Prompt Engineerings. Die Analyse beginnt mit einer Untersuchung der grundlegenden Prompt-Typologien, gefolgt von einer detaillierten Erörterung der Merkmale und der Struktur eines effektiven Prompts. Anschließend werden Best Practices, etablierte Frameworks und fortgeschrittene Techniken beleuchtet, bevor der Bericht mit einem Ausblick auf die Zukunft der Disziplin und die Rolle autonomer Systeme abschließt.

---

### **1\. Grundlagen und Typologien von Prompts: Von der einfachen Anweisung zum logischen Denken**

Dieser Abschnitt kategorisiert die verschiedenen grundlegenden Prompt-Arten, erläutert ihre spezifischen Anwendungsfälle und diskutiert ihre Vor- und Nachteile. Die evolutionäre Entwicklung dieser Prompt-Typen zeigt, wie die Interaktion mit LLMs sich von einer reinen Befehlseingabe zu einem Modell der Demonstration und Imitation entwickelt hat.

#### **1.1. Zero-Shot, One-Shot und Few-Shot: In-Context Learning als Paradigma**

Zero-Shot Prompting ist die einfachste Form der Interaktion, bei der eine direkte Anweisung ohne jegliche Beispiele oder Demonstrationen gegeben wird.4 Das Modell muss sich in diesem Fall ausschließlich auf sein vorab trainiertes Wissen verlassen, um die Aufgabe zu verstehen und zu lösen.5 Diese Methode ist ideal für simple, gut verstandene oder häufig gestellte Fragen, die das Modell wahrscheinlich in seinen Trainingsdaten gesehen hat, wie beispielsweise die Klassifizierung einer einfachen Textstimmung oder grundlegende Rechenaufgaben.5 Der Hauptvorteil liegt in seiner Effizienz und Unkompliziertheit. Allerdings kann Zero-Shot Prompting für komplexere oder neuartige Aufgaben unvorhersehbare oder inkorrekte Ergebnisse liefern, da das Fehlen von Beispielen das Modell dazu zwingt, zu raten.5

Um die Leistung zu verbessern, wird das Zero-Shot Prompting um Beispiele erweitert. One-Shot Prompting fügt dem Prompt ein einzelnes Beispiel hinzu, um die Erwartungen an die Ausgabe zu klären und die Modellleistung zu verbessern.5 Few-Shot Prompting geht noch einen Schritt weiter, indem es zwei oder mehr Beispiele bereitstellt.5 Diese Praxis, bekannt als

**In-Context Learning (ICL)**, ermöglicht es der KI, direkt aus den in den Prompt eingebetteten Beispielen zu lernen, anstatt sich allein auf ihr vortrainiertes Wissen zu verlassen.5 Few-Shot Prompting ist unverzichtbar für Aufgaben, die ein spezifisches Format erfordern, wie die Extraktion strukturierter Informationen oder die Generierung von Code, da es dem Modell hilft, Muster zu erkennen und diese auf neue Aufgaben zu übertragen.4 Die Methode führt zu präziseren und konsistenteren Ergebnissen, ist jedoch durch die Größe des Kontextfensters des Modells begrenzt und birgt die Gefahr der Überverallgemeinerung, wenn die Beispiele zu ähnlich sind.5 Die Entwicklung von diesen einfachen Formen des Prompting zu komplexeren Ansätzen zeigt eine grundlegende Verschiebung: Anstatt der KI nur mitzuteilen, was sie tun soll, wird ihr durch Beispiele gezeigt, wie sie denken oder sich verhalten soll.

#### **1.2. Chain-of-Thought (CoT) Prompting: Entfaltung des logischen Denkens**

Chain-of-Thought (CoT) Prompting ist eine fortgeschrittene Technik, die die Argumentationsfähigkeiten von LLMs verbessert, indem sie sie ermutigt, ihre Denkprozesse schrittweise offenzulegen, bevor sie eine endgültige Antwort geben.6 Dies wird durch das Hinzufügen einer einfachen Anweisung zum Prompt erreicht, wie „Erkläre deine Antwort Schritt für Schritt“ oder „Beschreibe deine Denkschritte“.7 Diese Methode leitet das Modell an, einen logischen Argumentationsprozess zu durchlaufen, was zu genaueren und zuverlässigeren Antworten führt.6

CoT ist besonders effektiv für komplexe, mehrstufige Aufgaben, die logisches Denken erfordern, wie mathematische Wortprobleme, logische Schlussfolgerungen oder die Simulation von Entscheidungsfindungsprozessen.6 Es bietet zudem eine erhöhte Transparenz, indem es die einzelnen Schritte des Modells zur Lösungsfindung sichtbar macht, was die Nachvollziehbarkeit verbessert und beim Debugging helfen kann.7 Ein wesentlicher Aspekt dieser Technik ist, dass sie eine sogenannte „emergente Fähigkeit“ (emergent ability) darstellt, die nur bei sehr großen Modellen mit über 100 Milliarden Parametern auftritt.6 Die Fähigkeit zur Durchführung logischer Schlussfolgerungen ist nicht einfach durch Prompting in kleineren Modellen künstlich zu erzeugen; die Anweisungen können diese Fähigkeit lediglich freischalten, nicht aber erschaffen. Dies hat direkte Auswirkungen auf die Zugänglichkeit und die Rechenkosten. Ein weiterer Nachteil ist, dass CoT-Prompts mehr Rechenleistung benötigen und das Risiko bergen, dass das Modell plausibel klingende, aber dennoch falsche Schlussfolgerungen generiert.7

#### **1.3. Rollen- und Persona-Prompts: Steuerung von Stil und Perspektive**

Bei dieser Technik wird dem Modell eine spezifische Rolle (z. B. "Reiseblogger," "Ernährungswissenschaftler") oder Persona zugewiesen, um den Tonfall, den Stil und die Perspektive der Antwort zu beeinflussen.8 Dies ist eine der nützlichsten Methoden, um maßgeschneiderte Antworten zu erhalten.8 Die Zuweisung einer Rolle, wie etwa "Handeln Sie als erfahrener Unternehmensberater", gibt dem Modell einen Kontext, der ihm hilft, seine Antwort an die erwartete Denkweise, den Ton und die Zielgruppe anzupassen.11

Rollen-Prompts sind außerordentlich nützlich für offene, kreative Aufgaben, wie z. B. die Erstellung von Marketingtexten für eine spezifische Zielgruppe, das Schreiben einer Kurzgeschichte im Stil eines bestimmten Autors oder die Formulierung von Antworten in einem bestimmten Tonfall (z. B. humorvoll oder professionell).10

Die Wirksamkeit dieser Methode für rein faktenbasierte Aufgaben ist jedoch umstritten. Neuere Studien zeigen widersprüchliche Ergebnisse, wobei einige Untersuchungen keine signifikante Leistungsverbesserung bei sachbezogenen Fragen feststellen konnten und die Verwendung von Persona-Prompts in einigen Fällen sogar die Leistung verschlechterte.9 Dies legt nahe, dass der Nutzer klar unterscheiden muss, ob eine Persona zur

**inhaltlichen Steuerung** des Modells (die in vielen Fällen unnötig ist, da die Modelle das Wissen bereits besitzen) oder zur **Formatierung und Stilgebung** der Ausgabe verwendet wird. Für letzteres bleibt die Technik äußerst effektiv.

Tabelle 1 fasst die Typologien der Prompts zusammen und bietet eine schnelle Referenz für ihre Anwendungsfälle und Merkmale.

| Prompt-Typ | Beschreibung | Ideale Anwendungsfälle | Vor- und Nachteile |
| :---- | :---- | :---- | :---- |
| **Zero-Shot** | Direkte Anweisung ohne Beispiele; das Modell verlässt sich auf sein vortrainiertes Wissen. | Einfache Aufgaben, Fragen, die das Modell kennt. | Effizient, unkompliziert. Kann unvorhersehbare Ergebnisse liefern. |
| **One-Shot / Few-Shot** | Die Anweisung wird durch ein oder mehrere Beispiele ergänzt. | Aufgaben mit spezifischen Formaten, Stil- oder Musteranforderungen. | Präzise, konsistent, zuverlässig. Begrenzung durch das Kontextfenster, Gefahr der Überverallgemeinerung. |
| **Chain-of-Thought (CoT)** | Fordert das Modell auf, seine Denkschritte zu erklären, bevor es eine Antwort gibt. | Komplexe, mehrstufige Aufgaben mit logischem Denken. | Erhöhte Genauigkeit, Transparenz. Effektiv nur bei sehr großen Modellen, höhere Rechenkosten. |
| **Rollen-/Persona-Prompt** | Weist dem Modell eine spezifische Rolle oder Persona zu. | Kreative Aufgaben, Stil- und Tonanpassung an eine Zielgruppe. | Maßgeschneiderte Antworten, Steuerung von Stil und Ton. Wirksamkeit bei rein faktenbasierten Aufgaben umstritten. |

---

### **2\. Merkmale und Struktur eines effektiven Prompts: Die Bausteine der Präzision**

Dieser Abschnitt seziert die fundamentalen Elemente eines guten Prompts, beschreibt die empfohlene Struktur, identifiziert häufige Fehler und beleuchtet die Rolle der Formatierung. Das zugrundeliegende Prinzip ist die Maximierung des Signal-Rausch-Verhältnisses, um die KI-Ausgabe so präzise wie möglich zu gestalten.

#### **2.1. Die essenziellen Komponenten eines Prompts**

Ein effektiver Prompt ist nicht einfach nur eine Frage, sondern eine sorgfältig konstruierte Anweisung. Die meisten erfolgreichen Prompts beinhalten vier Schlüsselkomponenten, die eine klare und umfassende Anweisung sicherstellen 8:

* **Anweisung (Instruction):** Dies ist die zentrale Richtlinie, die dem Modell das Ziel des Prompts mitteilt. Es sollte ein klares, handlungsorientiertes Verb verwenden, wie „fasse zusammen“, „klassifiziere“ oder „schreibe“.8  
* **Kontext (Context):** Kontext liefert zusätzliche Hintergrundinformationen, die dem Modell helfen, das breitere Szenario oder den Hintergrund zu verstehen.8 Er kann relevante Fakten, Daten oder eine Situation umfassen.15  
* **Eingabedaten (Input Data):** Dies sind die spezifischen Informationen oder Daten, die das Modell verarbeiten soll. Dies kann ein Absatz, eine Reihe von Zahlen oder sogar ein einzelnes Wort sein.8  
* **Ausgabeanweisung (Output Indicator):** Dieses Element gibt dem Modell vor, in welchem Format, Stil oder Umfang es antworten soll.8 Beispiele hierfür sind Anweisungen wie „Schreibe den folgenden Satz im Stil von Shakespeare um“ oder „Beschreibe den Eiffelturm in drei Sätzen“.8

#### **2.2. Wie man einen guten Prompt schreibt: Der Aufbau zählt**

Der Prozess der Prompt-Erstellung sollte als iterative Verfeinerung verstanden werden: Man beginnt mit einer einfachen Anweisung und ergänzt schrittweise Details, um die Antwort des Modells zu optimieren.8 Ein grundlegendes Prinzip ist die

**Klarheit und Spezifität**: Vage oder mehrdeutige Formulierungen müssen vermieden werden. Je präziser die Anweisung, desto besser das Ergebnis.10

Eine bewährte Methode, um Klarheit zu gewährleisten, ist die Verwendung einer klaren Struktur. Ein einfacher, aber effektiver Ansatz ist das **Rollen-Task-Zielgruppen-Modell**.11 Dabei weist man der KI eine spezifische

**Rolle** zu (z. B. "Du bist ein erfahrener Copywriter"), gibt ihr eine konkrete **Aufgabe** (z. B. "schreibe einen Blogpost") und definiert die **Zielgruppe** (z. B. "für junge Mütter").11 Die Verwendung von positiven Anweisungen, die dem Modell sagen,

**was es tun soll**, anstelle von Formulierungen, die ihm sagen, **was es nicht tun soll**, kann ebenfalls Missverständnisse vermeiden.16 Dieses Vorgehen behandelt die KI als eine Art hyperintelligenten Praktikanten: Sie ist extrem kompetent, braucht aber präzise Anweisungen, klaren Kontext und eine Überprüfung der Arbeit, da sie keine realweltliche Erfahrung besitzt.11

#### **2.3. Typische Fehler, die es zu vermeiden gilt**

Die häufigste Fehlerquelle ist die Verwendung von **vagen Anweisungen**.10 Eine Anweisung wie „Erzähl mir etwas über Autos“ ist zu breit gefasst und führt zu einer allgemeinen, wenig nützlichen Antwort. Besser ist es, die Anfrage zu präzisieren, z. B. „Erkläre die Unterschiede zwischen Benzin- und Elektroautos in Bezug auf ihre Umweltauswirkungen“.12 Ein weiterer häufiger Fehler ist der

**mangelnde Kontext**.11 Ohne Hintergrundinformationen kann die KI die Absicht des Nutzers nicht vollständig erfassen.

Die **Überkomplizierung** eines Prompts ist ebenfalls kontraproduktiv.11 Ein überladener oder verworrener Prompt kann die KI verwirren und die Leistung mindern. Die Kunst besteht darin, eine präzise Anweisung mit so wenig Wörtern wie möglich zu formulieren, um das „Signal“ der Anfrage zu maximieren und unnötiges „Rauschen“ zu minimieren.17 Schließlich ist das

**blinde Vertrauen** in KI-generierte Antworten die gefährlichste Annahme. KI-Modelle können Informationen „halluzinieren“ (erfinden), die plausibel, aber faktisch falsch sind.11 Daher ist die menschliche Überprüfung, insbesondere bei kritischen Inhalten, unerlässlich.

#### **2.4. Sollte ein Prompt in einem bestimmten Format verfasst sein?**

Die Frage, ob ein Prompt in einem bestimmten Format verfasst werden sollte, hat eine technische Grundlage. Es gibt keine universelle Regel, aber Formatierungen wie **Markdown** (z. B. Überschriften, Listen) oder **XML** können die interne Verarbeitung des Prompts durch das Modell verbessern.18 Sie dienen nicht der Ästhetik, sondern der

**funktionalen Klarheit**, indem sie verschiedene Teile des Prompts klar voneinander abgrenzen. Dies ist besonders bei komplexen Anweisungen, die verschiedene Abschnitte wie Kontext, Beispiele und Aufgabe enthalten, hilfreich.19

Die Verwendung einer klaren Struktur stellt sicher, dass das Modell den Prompt linear von oben nach unten verarbeitet.19 Wenn Kontext oder Definitionen vor der eigentlichen Aufgabe platziert werden, verarbeitet das Modell diese Informationen, bevor es mit der Generierung der Antwort beginnt. XML-Tags bieten in dieser Hinsicht noch mehr Klarheit als Markdown, da sie klare Start- (

\<abschnitt\>) und Endpunkte (\</abschnitt\>) definieren, was bei verschachtelten oder selbst-referenziellen Anweisungen von Vorteil sein kann.19

---

### **3\. Best Practices & Frameworks: Vom manuellen Prozess zur systematischen Methode**

Die Erstellung effektiver Prompts ist ein Prozess, der durch etablierte Methoden und Frameworks systematisiert werden kann. Diese Ansätze dienen als Leitfaden, um die Qualität und Konsistenz der KI-Ausgaben zu verbessern.

#### **3.1. Iterative Verfeinerung: Der Kernprozess**

Der Aufbau eines perfekten Prompts ist ein iterativer Prozess aus Versuch und Irrtum.13 Man beginnt mit einem einfachen Entwurf, testet ihn am Modell, bewertet die Ausgabe und verfeinert den Prompt schrittweise auf der Grundlage des Feedbacks.8 Dieser Prozess ist universell und bildet die Grundlage aller effektiven Prompt-Techniken. Er unterstreicht, dass die erste Antwort der KI selten die beste ist und kontinuierliche Anpassungen notwendig sind, um die gewünschte Qualität zu erreichen.11

#### **3.2. Etablierte Frameworks für strukturierte Prompt-Erstellung**

Frameworks wie **CRISPE** (Capacity/Role, Insight, Statement, Personality, Experiment) oder **CRAFT** (Context, Role, Action, Format, Tone) sind Gerüste, die den Prompt-Prozess formalisieren.20 Sie sind keine Zauberformeln, sondern strukturierte Anleitungen, die sicherstellen, dass alle wesentlichen Komponenten wie Rolle, Kontext, Anweisung und Format berücksichtigt werden.20 Indem sie den Nutzer anleiten, über jeden dieser Aspekte nachzudenken, helfen sie dabei, die Qualität und Konsistenz der Prompts zu verbessern.

Ein weiteres, fortgeschritteneres Framework ist **Tree-of-Thought (ToT)**, das eine baumartige Exploration mehrerer Denkpfade ermöglicht, um komplexe Probleme zu lösen.22 Es generiert Ideen für jeden Schritt, bewertet sie und wählt den besten Weg. Dieses Framework hebt die systematische Problemlösung auf eine neue Ebene, indem es die KI dazu anregt, verschiedene Lösungsansätze zu bewerten und einen übergeordneten Denkprozess zu verfolgen.23

#### **3.3. Praxisbeispiele für verschiedene Anwendungsgebiete**

Die Fähigkeit, effektive Prompts zu erstellen, ist zu einer domänenspezifischen Kompetenz geworden, da der Inhalt und das Ziel der Prompts stark variieren.

* **Recherche & Datenanalyse:** Ein Prompt kann dazu verwendet werden, eine Zusammenfassung eines Dokuments zu erstellen oder große Datensätze zu analysieren, um Trends zu identifizieren.2 Beispiel: „Analysiere die Verkaufsdaten der letzten drei Monate und identifiziere die Top 5 Produkte mit dem höchsten Wachstum“.3  
* **Kreativität & Content-Erstellung:** Für kreative Aufgaben können Prompts eine Produktbeschreibung entwerfen, eine Kurzgeschichte schreiben oder Ideen für eine Marketingkampagne generieren.12 Beispiel: „Erstelle eine 150-Wörter-Produktbeschreibung für ein umweltfreundliches Handtuch-Set aus Bambusfasern. Betone die Weichheit, Haltbarkeit und die umweltfreundlichen Vorteile“.24  
* **Programmierung & Data Science:** Prompting kann die Code-Generierung und das Schreiben von Testfällen vereinfachen.13 Es kann auch zur Automatisierung von Datenbereinigungsaufgaben in Datenpipelines eingesetzt werden.3 Beispiel: „Schreibe ein Python-Skript, das alle leeren Zeilen aus einer CSV-Datei entfernt.“  
* **Business & Marketing:** Im Business-Umfeld kann ein Prompt zum Verfassen von E-Mails, zur Entwicklung einer Social-Media-Strategie oder zur Formulierung einer Zielgruppen-Persona genutzt werden.10 Beispiel: „Entwickle eine Social-Media-Strategie für ein kleines lokales Café, das nachhaltigen Kaffee verkauft.“

Tabelle 2 gibt einen Überblick über verschiedene Frameworks und ihre Schlüsselkomponenten.

| Framework-Name | Schlüsselkomponenten | Typische Anwendungsbereiche |
| :---- | :---- | :---- |
| **CRAFT** | Context, Role, Action, Format, Tone | Allzweck-Prompts, Kreativität, Business-Strategie |
| **CRISPE** | Capacity/Role, Insight, Statement, Personality, Experiment | Aufgaben mit spezifischen Rollen, wie z. B. Marketing |
| **STAR** | Situation, Task, Action, Result | Problemlösung, Entscheidungsfindung in komplexen Szenarien |
| **TRACE** | Task, Request, Action, Context, Example | Strukturierte Marketing-Aufgaben, Content-Erstellung |

---

### **4\. Fortgeschrittene Techniken & LLM-Parameter: Die Kunst der Feinabstimmung**

Dieser Abschnitt widmet sich den fortgeschrittenen Techniken, die eine übergeordnete Kontrolle über die KI ermöglichen, und erklärt die grundlegenden LLM-Parameter, die zur Feinabstimmung der Ausgabe dienen. Die Entwicklung dieser Methoden zeigt eine klare Hierarchie der Automatisierung, die den Nutzer von der einmaligen Anweisung zur Steuerung komplexer Systeme führt.

#### **4.1. Prompt Chaining und Meta-Prompting: Meisterung der Komplexität**

**Prompt Chaining** ist eine Technik, die eine komplexe Aufgabe in eine Abfolge kleinerer, einfacher Prompts zerlegt.26 Die Ausgabe des ersten Prompts dient als Eingabe für den nächsten, was die Kontrollierbarkeit und Genauigkeit bei mehrstufigen Prozessen erhöht.26 Zum Beispiel kann eine komplexe Übersetzungsaufgabe in eine Kette von Prompts zerlegt werden: 1\. „Lies den spanischen Text.“ 2\. „Übersetze den Text ins Englische.“ 3\. „Extrahiere die Fakten aus dem übersetzten Text.“ 4\. „Erstelle eine Aufzählung der Fakten.“ 5\. „Übersetze die Aufzählung zurück ins Spanische“.26 Dieser manuelle, sequenzielle Ansatz erhöht die Zuverlässigkeit und hilft, komplexe Probleme zu bewältigen.26

**Meta-Prompting** ist ein noch fortschrittlicherer Ansatz, bei dem ein LLM verwendet wird, um Prompts zu erstellen und zu verfeinern.27 Anstatt jeden Prompt manuell zu verfassen, delegiert ein zentrales „Meta-Expert“-LLM Teilaufgaben an spezialisierte „Experten“-LLMs und synthetisiert deren Ergebnisse.27 Dieses Vorgehen stellt einen ersten Schritt hin zu autonomen Systemen dar, die Prompts selbstständig optimieren.27 Die Konversation findet hier nicht nur zwischen Mensch und KI statt, sondern die KI selbst verwendet Prompts, um komplexe Probleme durch die Koordination von spezialisierten Sub-Modellen zu lösen.

#### **4.2. Die vertiefte Rolle von Persona, Zielgruppe und System-Prompts**

Die Zuweisung einer **Persona** oder die Definition einer **Zielgruppe** ist mehr als nur eine einfache Anweisung; es ist die Bereitstellung eines umfassenden Kontextes, der die gesamte Antwort prägt.9 Eine gut definierte Persona ist ein detaillierter, synthetischer Entwurf eines idealen Kunden, der Wünsche, Ängste und Entscheidungskriterien beschreibt.25 Die Integration dieser Informationen in den Prompt stellt sicher, dass die generierten Inhalte spezifisch auf die Bedürfnisse des Publikums zugeschnitten sind.25

**System-Prompts** sind eine entscheidende, aber oft unsichtbare Komponente. Sie sind hinter den Kulissen liegende Anweisungen, die das allgemeine Verhalten und den Tonfall des Modells über die gesamte Konversation hinweg steuern.28 Entwickler von KI-Anwendungen verwenden sie, um dem Modell permanente Regeln wie „Reagiere immer formal und zitiere echte Quellen“ zu geben.28 Die Unterscheidung zwischen einem Persona-Prompt (einer Ad-hoc-Anweisung) und einem System-Prompt (einer dauerhaften Anweisung) kennzeichnet den Übergang von der einmaligen Konversation zum Aufbau einer dauerhaft gesteuerten und kontrollierten KI-Anwendung, wie z. B. einem spezifischen Chatbot.

#### **3.3. Feinabstimmung über LLM-Parameter**

Die Qualität der LLM-Ausgabe kann durch die Feinabstimmung verschiedener Parameter gesteuert werden, die eine grundlegende Dualität zwischen Kontrolle und Kreativität offenbaren.29

* **Temperatur (Temperature):** Dieser Parameter kontrolliert die Zufälligkeit der Ausgabe.29 Ein niedriger Wert (z. B. 0.2) führt zu deterministischen, faktischen und konservativen Antworten, da das Modell immer den wahrscheinlichsten nächsten Token wählt.29 Ein hoher Wert (z. B. 0.8) fördert Kreativität und Vielfalt, indem er die Wahrscheinlichkeiten für weniger wahrscheinliche Token erhöht.29  
* **Top P:** Diese Sampling-Technik, auch Nucleus Sampling genannt, arbeitet mit der Temperatur zusammen, um die Determinismus der Ausgabe zu kontrollieren.29 Ein niedriger  
  Top P-Wert beschränkt die Auswahl auf die statistisch wahrscheinlichsten Token und ist ideal für faktenbasierte Antworten. Ein hoher Wert ermöglicht es dem Modell, ein breiteres Spektrum an Möglichkeiten in Betracht zu ziehen, was zu vielfältigeren Ausgaben führt.29  
* **Frequency Penalty und Presence Penalty:** Diese Parameter reduzieren Wortwiederholungen in der Ausgabe.29 Die  
  Frequency Penalty bestraft Token proportional zu ihrer Häufigkeit, während die Presence Penalty eine flache Strafe verhängt, sobald ein Token einmal aufgetaucht ist.30 Für diverse oder kreative Texte kann ein höherer Wert beider Parameter nützlich sein.29 Es wird empfohlen, entweder Temperatur oder Top P anzupassen, nicht aber beides gleichzeitig.29 Dasselbe gilt für Frequency Penalty und Presence Penalty.29

Tabelle 3 illustriert den Einfluss dieser Parameter auf die Ausgabequalität.

| Parameter | Funktion | Anwendungsfall (faktisch vs. kreativ) | Empfehlung |
| :---- | :---- | :---- | :---- |
| **Temperatur** | Steuert die Zufälligkeit. | Niedrig für faktische Antworten, hoch für kreative Texte. | Nur einen der beiden Parameter Temperatur oder Top P verändern. |
| **Top P** | Steuert die Auswahlwahrscheinlichkeit. | Niedrig für präzise Antworten, hoch für Vielfalt. | Nur einen der beiden Parameter Temperatur oder Top P verändern. |
| **Frequency Penalty** | Reduziert die Wiederholung von Wörtern proportional zu ihrer Häufigkeit. | Ideal, um Wiederholungen in langen Texten zu vermeiden. | Nur einen der beiden Parameter Frequency Penalty oder Presence Penalty verändern. |
| **Presence Penalty** | Bestraft wiederholte Token flach, unabhängig von ihrer Häufigkeit. | Gut für die Erstellung von abwechslungsreichen, kreativen Texten. | Nur einen der beiden Parameter Frequency Penalty oder Presence Penalty verändern. |

---

### **5\. Zukunft & Forschung: Die nächste Ära des Prompt Engineerings**

Die Zukunft des Prompt Engineerings ist eng mit der Entwicklung autonomer KI-Systeme und der Automatisierung der Prompt-Erstellung verbunden. Diese Entwicklungen werfen die Frage nach der anhaltenden Relevanz der manuellen Prompt-Optimierung auf.

#### **5.1. Aktuelle Trends und offene Forschungsfragen**

Der wichtigste Trend ist die Automatisierung der Prompt-Erstellung, bekannt als **Auto-Prompting**.31 Ansätze wie

**Automatic Chain-of-Thought (Auto-CoT)** ermöglichen es Modellen, ihre eigenen Denkschritte zu generieren und so den Bedarf an manuell kuratierten Beispielen zu reduzieren.32 Dies ist eine der zentralen Forschungsfragen, da die manuelle Erstellung von Prompts arbeitsintensiv und zeitaufwändig ist.31

Die Forschung konzentriert sich zudem auf die Behebung von **Halluzinationen**, die Verbesserung der logischen Schlussfolgerungen mit Methoden wie **Graph of Thoughts** und die Optimierung von Prompts durch KI-gesteuerte Frameworks wie **Optimization by PROmpting (OPRO)**.33 Die Fähigkeit von LLMs, die Qualität ihrer eigenen Prompts zu bewerten und zu verbessern, wird zu einem zentralen Forschungsfeld, was die Grenzen der Disziplin weiter verschiebt.33

#### **5.2. Auto-Prompting: Von der manuellen Erstellung zur Automatisierung**

**Auto-Prompting** ist der Prozess, bei dem LLMs Prompts automatisch generieren und verfeinern.31 Frameworks wie

AutoPrompt verwenden einen iterativen Kalibrierungsprozess: Ein Modell generiert Beispieldatensätze, bewertet die Leistung des Prompts und schlägt anschließend einen verbesserten Prompt vor.31 Dieses Vorgehen zielt darauf ab, die manuelle Arbeit der Prompt-Erstellung zu minimieren und die Ergebnisse zu perfektionieren.

Diese Entwicklung deutet darauf hin, dass die Fähigkeit, einen perfekten Prompt manuell zu schreiben, in Zukunft an Relevanz verlieren könnte. Wenn die KI die besten Prompts selbst erstellen kann, wird sich der Wert des Menschen von der **Eingabeoptimierung** zur **Zieldefinition und Ergebnisvalidierung** verschieben. Der Fokus liegt dann weniger auf dem Wie und mehr auf dem Was und Warum.

#### **5.3. Die Vision generativer Agenten: Autonome Problemlöser**

Es ist entscheidend, zwischen **Generativer KI** (die Inhalte basierend auf einem Prompt erstellt) und **Agentic AI** (die autonom Entscheidungen trifft und komplexe Ziele verfolgt) zu unterscheiden.35 Während generative KI ein Werkzeug ist, das auf menschliche Befehle reagiert, ist Agentic AI in der Lage, ein komplexes Ziel mit begrenzter menschlicher Aufsicht zu verfolgen, indem es Aufgaben zerlegt und autonom handelt.35

Die Zukunft des Prompt Engineerings liegt in der Gestaltung von Interaktionen mit diesen **Generativen Agenten**. Der Nutzer gibt nur noch ein übergeordnetes Ziel vor, und der Agent zerlegt es in Teilaufgaben, generiert die notwendigen Prompts und führt sie sequenziell aus, um das Ziel zu erreichen. Das bedeutet, dass Prompts nicht länger nur Anweisungen für ein einmaliges Ergebnis sind, sondern vielmehr **Baupläne für komplexe, autonome Arbeitsabläufe**. Die Disziplin verlagert sich von der **Textgestaltung zur System-Design**. Trotz dieser Automatisierung bleibt die menschliche Rolle als letzter Kontrollpunkt und Faktenprüfer unersetzlich, da das Problem der Halluzinationen weiterhin eine offene Forschungsfrage darstellt.11

---

### **Fazit & Checkliste für die Praxis**

Der Weg von einfachen Anweisungen zu komplexen, autonomen Systemen ist eine Reise, die das Prompt Engineering von einer einfachen Fertigkeit zu einer kritischen Disziplin der Mensch-KI-Interaktion gemacht hat. Die Analyse zeigt, dass effektives Prompting weit mehr als nur die Wahl der richtigen Wörter ist; es erfordert ein tiefes Verständnis für die Funktionsweise der Modelle, eine präzise Struktur und die Fähigkeit zur iterativen Verfeinerung. Die Evolution zu Techniken wie Chain-of-Thought und der Aufstieg von Auto-Prompting unterstreichen die Verschiebung von einer rein manuellen Tätigkeit zu einer systemischen, strategischen Rolle.

Die Zukunft deutet darauf hin, dass die manuelle Optimierung von Prompts durch automatisierte Systeme und generative Agenten ergänzt oder sogar ersetzt werden könnte. Der Wert des Menschen wird sich von der Ausführung zum Design und zur Überwachung verlagern. Trotzdem bleiben die grundlegenden Prinzipien – Klarheit, Kontext und Spezifität – die unerschütterlichen Säulen des Prompt Engineerings. Die folgende Checkliste fasst die wichtigsten praktischen Ratschläge für die Erstellung effektiver Prompts zusammen.

#### **Checkliste für die Erstellung effektiver Prompts**

* **1\. Ziel klar definieren:** Verwenden Sie ein klares Handlungsverb (z. B. zusammenfassen, erklären) am Anfang des Prompts.  
* **2\. Rolle zuweisen:** Geben Sie dem Modell eine spezifische Rolle (z. B. Du bist ein erfahrener Wissenschaftler), um den Stil und die Perspektive zu steuern.  
* **3\. Kontext liefern:** Bieten Sie alle relevanten Hintergrundinformationen an, die das Modell benötigt, um die Anfrage vollständig zu verstehen.  
* **4\. Zielgruppe festlegen:** Beschreiben Sie, für wen die Antwort gedacht ist, damit der Tonfall und die Komplexität angepasst werden.  
* **5\. Format vorgeben:** Legen Sie fest, wie die Antwort strukturiert sein soll (z. B. als Aufzählung, in einer Tabelle, als Fließtext).  
* **6\. Spezifisch und präzise sein:** Vermeiden Sie vage oder mehrdeutige Formulierungen. Denken Sie an das Signal-Rausch-Verhältnis.  
* **7\. Positive Anweisungen verwenden:** Formulieren Sie, was getan werden soll, anstatt was vermieden werden soll.  
* **8\. Vorsichtig sein bei sensiblen Inhalten:** Überprüfen Sie immer die Fakten und vertrauen Sie nicht blind auf die Ausgabe.  
* **9\. Iterieren, iterieren, iterieren:** Beginnen Sie mit einem einfachen Entwurf und verfeinern Sie ihn schrittweise.  
* **10\. Parameter anpassen:** Nutzen Sie LLM-Parameter wie Temperatur oder Top P, um die Zufälligkeit für kreative oder faktische Aufgaben zu steuern.

#### **Referenzen**

1. What is Prompt Engineering? \- AI Prompt Engineering Explained ..., Zugriff am August 22, 2025, [https://aws.amazon.com/what-is/prompt-engineering/](https://aws.amazon.com/what-is/prompt-engineering/)  
2. What is prompt engineering? | McKinsey, Zugriff am August 22, 2025, [https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-prompt-engineering](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-prompt-engineering)  
3. What is Prompt Engineering? Trend in 2024, Zugriff am August 22, 2025, [https://dataengineeracademy.com/blog/what-is-prompt-engineering-trend-in-2024/](https://dataengineeracademy.com/blog/what-is-prompt-engineering-trend-in-2024/)  
4. Include few-shot examples | Generative AI on Vertex AI \- Google Cloud, Zugriff am August 22, 2025, [https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/few-shot-examples](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/few-shot-examples)  
5. Shot-Based Prompting: Zero-Shot, One-Shot, and Few-Shot Prompting, Zugriff am August 22, 2025, [https://learnprompting.org/docs/basics/few\_shot](https://learnprompting.org/docs/basics/few_shot)  
6. Chain-of-Thought Prompting, Zugriff am August 22, 2025, [https://learnprompting.org/docs/intermediate/chain\_of\_thought](https://learnprompting.org/docs/intermediate/chain_of_thought)  
7. What is chain of thought (CoT) prompting? | IBM, Zugriff am August 22, 2025, [https://www.ibm.com/think/topics/chain-of-thoughts](https://www.ibm.com/think/topics/chain-of-thoughts)  
8. Was ist Prompt Engineering? Ein detaillierter Leitfaden für 2024 | DataCamp, Zugriff am August 22, 2025, [https://www.datacamp.com/de/blog/what-is-prompt-engineering-the-future-of-ai-communication](https://www.datacamp.com/de/blog/what-is-prompt-engineering-the-future-of-ai-communication)  
9. Role-Prompting: Does Adding Personas to Your Prompts Really ..., Zugriff am August 22, 2025, [https://medium.com/@dan\_43009/role-prompting-does-adding-personas-to-your-prompts-really-make-a-difference-ad223b5f1998](https://medium.com/@dan_43009/role-prompting-does-adding-personas-to-your-prompts-really-make-a-difference-ad223b5f1998)  
10. Gute ChatGPT Prompts für beste Ergebnisse \- Prompt Design, Zugriff am August 22, 2025, [https://mister-seo.com/chatgpt-prompt-design/](https://mister-seo.com/chatgpt-prompt-design/)  
11. 5 entscheidende Fehler beim KI-Prompting & wie du sie vermeidest, Zugriff am August 22, 2025, [https://www.godaddy.com/resources/de/stories/5-entscheidende-fehler-beim-ki-prompting-die-du-wahrscheinlich-machst](https://www.godaddy.com/resources/de/stories/5-entscheidende-fehler-beim-ki-prompting-die-du-wahrscheinlich-machst)  
12. ChatGPT Prompts ↗️ Die 5 besten Prompts \- Sophie Hundertmark, Zugriff am August 22, 2025, [https://www.sophiehundertmark.com/chatgpt-prompts/](https://www.sophiehundertmark.com/chatgpt-prompts/)  
13. Prompt Engineering Guide \- jentsch.io, Zugriff am August 22, 2025, [https://www.jentsch.io/wp-content/uploads/2023/04/Prompt-Engineering-Guide.pdf](https://www.jentsch.io/wp-content/uploads/2023/04/Prompt-Engineering-Guide.pdf)  
14. What is Prompt Engineering? A Detailed Guide For 2025 \- DataCamp, Zugriff am August 22, 2025, [https://www.datacamp.com/blog/what-is-prompt-engineering-the-future-of-ai-communication](https://www.datacamp.com/blog/what-is-prompt-engineering-the-future-of-ai-communication)  
15. Prompt Engineering for AI Guide | Google Cloud, Zugriff am August 22, 2025, [https://cloud.google.com/discover/what-is-prompt-engineering](https://cloud.google.com/discover/what-is-prompt-engineering)  
16. Tipps für bessere Prompts \- competitionline, Zugriff am August 22, 2025, [https://www.competitionline.com/de/news/schwerpunkt/tipps-fuer-bessere-prompts-7200.html](https://www.competitionline.com/de/news/schwerpunkt/tipps-fuer-bessere-prompts-7200.html)  
17. Prompts für KI: Definition und Anwendung in ChatGPT und Midjourney \- Konfuzio, Zugriff am August 22, 2025, [https://konfuzio.com/de/prompts/](https://konfuzio.com/de/prompts/)  
18. Has anyone found that using markdown in the prompt makes a difference? \- API, Zugriff am August 22, 2025, [https://community.openai.com/t/has-anyone-found-that-using-markdown-in-the-prompt-makes-a-difference/1089055](https://community.openai.com/t/has-anyone-found-that-using-markdown-in-the-prompt-makes-a-difference/1089055)  
19. Prompts with Markdown format are better? : r/ChatGPT \- Reddit, Zugriff am August 22, 2025, [https://www.reddit.com/r/ChatGPT/comments/1gfgvhc/prompts\_with\_markdown\_format\_are\_better/](https://www.reddit.com/r/ChatGPT/comments/1gfgvhc/prompts_with_markdown_format_are_better/)  
20. Prompt Engineering Frameworks \- AI Prompting Clinic, Zugriff am August 22, 2025, [https://aipromptingclinic.com/craft](https://aipromptingclinic.com/craft)  
21. 11 Must-Know ChatGPT Prompt Frameworks for Marketers ..., Zugriff am August 22, 2025, [https://buttercms.com/blog/chatgpt-prompt-frameworks/](https://buttercms.com/blog/chatgpt-prompt-frameworks/)  
22. How Tree of Thoughts Prompting Works \- PromptHub, Zugriff am August 22, 2025, [https://www.prompthub.us/blog/how-tree-of-thoughts-prompting-works](https://www.prompthub.us/blog/how-tree-of-thoughts-prompting-works)  
23. Tree of Thoughts (ToT) | Prompt Engineering Guide, Zugriff am August 22, 2025, [https://www.promptingguide.ai/techniques/tot](https://www.promptingguide.ai/techniques/tot)  
24. Prompt Engineering Beispiele, Techniken und praktische Anwendungen \- ClickUp, Zugriff am August 22, 2025, [https://clickup.com/de/blog/146676/beispiele-fuer-prompt-engineering](https://clickup.com/de/blog/146676/beispiele-fuer-prompt-engineering)  
25. How to Create an AI Marketing Persona: 8 Prompts For Deep Insights | Orbit Media Studios, Zugriff am August 22, 2025, [https://www.orbitmedia.com/blog/ai-marketing-personas/](https://www.orbitmedia.com/blog/ai-marketing-personas/)  
26. What is prompt chaining? | IBM, Zugriff am August 22, 2025, [https://www.ibm.com/think/topics/prompt-chaining](https://www.ibm.com/think/topics/prompt-chaining)  
27. A Complete Guide to Meta Prompting \- PromptHub, Zugriff am August 22, 2025, [https://www.prompthub.us/blog/a-complete-guide-to-meta-prompting](https://www.prompthub.us/blog/a-complete-guide-to-meta-prompting)  
28. Effective Prompts for AI: The Essentials \- MIT Sloan Teaching & Learning Technologies, Zugriff am August 22, 2025, [https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/)  
29. LLM Settings | Prompt Engineering Guide, Zugriff am August 22, 2025, [https://www.promptingguide.ai/introduction/settings](https://www.promptingguide.ai/introduction/settings)  
30. Understanding Temperature, Top P, and Maximum Length in LLMs \- Learn Prompting, Zugriff am August 22, 2025, [https://learnprompting.org/docs/intermediate/configuration\_hyperparameters](https://learnprompting.org/docs/intermediate/configuration_hyperparameters)  
31. Eladlev/AutoPrompt: A framework for prompt tuning using Intent-based Prompt Calibration, Zugriff am August 22, 2025, [https://github.com/Eladlev/AutoPrompt](https://github.com/Eladlev/AutoPrompt)  
32. The Latest Breakthroughs in AI Prompt Engineering Is Pretty Cool \- Reddit, Zugriff am August 22, 2025, [https://www.reddit.com/r/PromptEngineering/comments/1j250g9/the\_latest\_breakthroughs\_in\_ai\_prompt\_engineering/](https://www.reddit.com/r/PromptEngineering/comments/1j250g9/the_latest_breakthroughs_in_ai_prompt_engineering/)  
33. Evaluating the effectiveness of prompt engineering for ... \- Frontiers, Zugriff am August 22, 2025, [https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1454258/full](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1454258/full)  
34. Papers | Prompt Engineering Guide, Zugriff am August 22, 2025, [https://www.promptingguide.ai/papers](https://www.promptingguide.ai/papers)  
35. Agentic AI vs. Generative AI | IBM, Zugriff am August 22, 2025, [https://www.ibm.com/think/topics/agentic-ai-vs-generative-ai](https://www.ibm.com/think/topics/agentic-ai-vs-generative-ai)