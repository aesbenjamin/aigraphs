// Dados da Evolução da IA - Expandidos e Atualizados (2025)
const data = {
    nodes: [
        // --- Era 1: Fundamentos (1940-1960) ---
        { 
            id: "McCullochPitts", name: "Neurônio Artificial", year: 1943, group: "Fundamentos", 
            desc: "O início de tudo. Warren McCulloch e Walter Pitts propõem o modelo matemático que prova que neurônios conectados podem executar lógica computacional.",
            link: "https://pt.wikipedia.org/wiki/Neur%C3%B4nio_artificial"
        },
        { 
            id: "Turing", name: "Teste de Turing", year: 1950, group: "Fundamentos", 
            desc: "Alan Turing muda a pergunta 'Máquinas podem pensar?' para 'Máquinas podem se passar por humanos?', criando o critério definitivo de inteligência.",
            link: "https://pt.wikipedia.org/wiki/Teste_de_Turing"
        },
        { 
            id: "Dartmouth", name: "Workshop Dartmouth", year: 1956, group: "Fundamentos", 
            desc: "O batismo da IA. McCarthy, Minsky e outros se reúnem e cunham o termo 'Inteligência Artificial', prevendo que máquinas simularam qualquer aspecto da inteligência humana.",
            link: "https://pt.wikipedia.org/wiki/Confer%C3%AAncia_de_Dartmouth"
        },
        { 
            id: "Perceptron", name: "Perceptron", year: 1958, group: "Neural", 
            desc: "A primeira máquina que podia 'aprender'. Frank Rosenblatt criou uma rede neural de camada única, gerando hype sobre máquinas que logo poderiam andar e falar.",
            link: "https://pt.wikipedia.org/wiki/Perceptron"
        },
        { 
            id: "LISP", name: "LISP", year: 1958, group: "Simbolica", 
            desc: "A linguagem da IA. Criada por John McCarthy, introduziu recursão e processamento simbólico, dominando a pesquisa de IA por décadas.",
            link: "https://pt.wikipedia.org/wiki/Lisp"
        },

        // --- Era 2: Símbolos e Invernos (1960-1990) ---
        { 
            id: "ELIZA", name: "ELIZA", year: 1966, group: "Simbolica", 
            desc: "O primeiro chatbot. Simulava um terapeuta e enganava humanos, demonstrando a ilusão de compreensão (o Efeito ELIZA).",
            link: "https://pt.wikipedia.org/wiki/ELIZA"
        },
        { 
            id: "MinskyPapert", name: "Crise Perceptrons", year: 1969, group: "Crise", 
            desc: "Minsky e Papert provam matematicamente as limitações das redes neurais simples (não resolviam XOR), causando o primeiro 'Inverno da IA'.",
            link: "https://en.wikipedia.org/wiki/Perceptrons_(book)"
        },
        { 
            id: "Winter1", name: "Inverno da IA", year: 1974, group: "Crise", 
            desc: "Cortes massivos de verbas governamentais devido à falta de progresso prático. A IA tornou-se um termo quase proibido na academia.",
            link: "https://pt.wikipedia.org/wiki/Inverno_da_intelig%C3%AAncia_artificial"
        },
        { 
            id: "ExpertSys", name: "Sistemas Especialistas", year: 1980, group: "Simbolica", 
            desc: "IA útil nas empresas. Sistemas baseados em regras (IF-THEN) capturavam conhecimento humano para resolver problemas específicos.",
            link: "https://pt.wikipedia.org/wiki/Sistema_especialista"
        },
        { 
            id: "Backprop", name: "Backpropagation", year: 1986, group: "Neural", 
            desc: "O renascimento. A redescoberta deste algoritmo permitiu treinar redes profundas (multicamadas), superando a crise de 1969.",
            link: "https://pt.wikipedia.org/wiki/Backpropagation"
        },
        { 
            id: "LeNet", name: "LeNet-5", year: 1989, group: "Neural", 
            desc: "Yann LeCun cria a primeira CNN prática para ler cheques e cartas. A avó da visão computacional moderna.",
            link: "https://en.wikipedia.org/wiki/LeNet"
        },

        // --- Era 3: Machine Learning e Big Data (1990-2010) ---
        { 
            id: "DeepBlue", name: "Deep Blue", year: 1997, group: "Marcos", 
            desc: "A força bruta vence a intuição. O computador da IBM derrota o campeão mundial de xadrez Garry Kasparov.",
            link: "https://pt.wikipedia.org/wiki/Deep_Blue"
        },
        { 
            id: "LSTM", name: "LSTM", year: 1997, group: "Neural", 
            desc: "Redes com memória. Resolveram o problema de 'esquecimento' em redes neurais, fundamentais para tradução e fala por 20 anos.",
            link: "https://en.wikipedia.org/wiki/Long_short-term_memory"
        },
        { 
            id: "ImageNet", name: "ImageNet", year: 2009, group: "Dados", 
            desc: "O combustível da IA. Um banco de imagens massivo que permitiu treinar modelos gigantes, mudando o foco para 'Big Data'.",
            link: "https://pt.wikipedia.org/wiki/ImageNet"
        },
        { 
            id: "Watson", name: "IBM Watson", year: 2011, group: "Marcos", 
            desc: "IA entende linguagem natural e vence humanos no Jeopardy!, mostrando potencial para medicina e advocacia.",
            link: "https://pt.wikipedia.org/wiki/IBM_Watson"
        },

        // --- Era 4: Deep Learning Boom (2012-2017) ---
        { 
            id: "AlexNet", name: "AlexNet", year: 2012, group: "DeepLearning", 
            desc: "O Big Bang do Deep Learning. Esmagou a competição ImageNet usando GPUs, provando a superioridade das redes profundas.",
            link: "https://en.wikipedia.org/wiki/AlexNet"
        },
        { 
            id: "Word2Vec", name: "Word2Vec", year: 2013, group: "Neural", 
            desc: "Transformando palavras em matemática. Criou 'embeddings' onde Rei - Homem + Mulher = Rainha.",
            link: "https://en.wikipedia.org/wiki/Word2vec"
        },
        { 
            id: "GANs", name: "GANs", year: 2014, group: "Generativa", 
            desc: "Imaginação artificial. Redes adversárias que competem para criar imagens realistas de pessoas que não existem.",
            link: "https://en.wikipedia.org/wiki/Generative_adversarial_network"
        },
        { 
            id: "ResNet", name: "ResNet", year: 2015, group: "DeepLearning", 
            desc: "Redes ultra-profundas. Introduziu conexões residuais, permitindo treinar redes com centenas de camadas sem falhas.",
            link: "https://en.wikipedia.org/wiki/Residual_neural_network"
        },
        { 
            id: "AlphaGo", name: "AlphaGo", year: 2016, group: "DeepLearning", 
            desc: "O lance impossível. A IA venceu no Go, jogo de intuição pura, fazendo o famoso 'Movimento 37' que chocou mestres.",
            link: "https://pt.wikipedia.org/wiki/AlphaGo"
        },
        { 
            id: "Transformer", name: "Transformers", year: 2017, group: "Arquitetura", 
            desc: "Attention Is All You Need. O paper do Google que aposentou as redes antigas e criou a base para TODOS os LLMs modernos.",
            link: "https://arxiv.org/abs/1706.03762"
        },

        // --- Era 5: LLMs e Escala (2018-2022) ---
        { 
            id: "BERT", name: "BERT", year: 2018, group: "Arquitetura", 
            desc: "Entendimento bidirecional. O modelo do Google que revolucionou a busca e o entendimento de contexto em texto.",
            link: "https://en.wikipedia.org/wiki/BERT_(language_model)"
        },
        { 
            id: "GPT3", name: "GPT-3", year: 2020, group: "Generativa", 
            desc: "A escala muda tudo. Com 175B parâmetros, provou que modelos gigantes ganham habilidades emergentes como programar.",
            link: "https://en.wikipedia.org/wiki/GPT-3"
        },
        { 
            id: "AlphaFold", name: "AlphaFold", year: 2020, group: "Marcos", 
            desc: "Resolvendo a biologia. Previu o formato de quase todas as proteínas conhecidas, acelerando a descoberta de drogas.",
            link: "https://en.wikipedia.org/wiki/AlphaFold"
        },
        { 
            id: "CLIP", name: "CLIP", year: 2021, group: "Multimodal", 
            desc: "Unindo texto e imagem. Ensinou computadores a entenderem conceitos visuais a partir de descrições, vital para o DALL-E.",
            link: "https://openai.com/research/clip"
        },
        { 
            id: "Copilot", name: "GitHub Copilot", year: 2021, group: "Generativa", 
            desc: "AI Pair Programmer. O primeiro uso massivo de LLMs para aumentar a produtividade humana real (coding).",
            link: "https://github.com/features/copilot"
        },
        { 
            id: "Diffusion", name: "Stable Diffusion", year: 2022, group: "Generativa", 
            desc: "Arte para todos. A tecnologia open-source que democratizou a geração de imagens de alta qualidade em PCs domésticos.",
            link: "https://en.wikipedia.org/wiki/Stable_Diffusion"
        },
        { 
            id: "ChatGPT", name: "ChatGPT", year: 2022, group: "Generativa", 
            desc: "O momento iPhone da IA. Tornou a IA acessível via chat, atingindo 100 milhões de usuários em tempo recorde.",
            link: "https://pt.wikipedia.org/wiki/ChatGPT"
        },

        // --- Era 6: Competição, Multimodalidade e Agentes (2023-2024) ---
        { 
            id: "LLaMA", name: "LLaMA", year: 2023, group: "OpenSource", 
            desc: "A revolução Open Source. A Meta vazou/lançou os pesos, permitindo que a comunidade rodasse modelos poderosos localmente.",
            link: "https://ai.meta.com/blog/large-language-model-llama-meta-ai/"
        },
        { 
            id: "GPT4", name: "GPT-4", year: 2023, group: "Generativa", 
            desc: "O colosso. Demonstrou raciocínio de nível humano em exames (OAB, SAT, Medicina) e multimodadidade inicial.",
            link: "https://openai.com/gpt-4"
        },
        { 
            id: "Mistral", name: "Mistral AI", year: 2023, group: "OpenSource", 
            desc: "Eficiência Europeia. Modelos pequenos e abertos (Mixtral) que desafiaram a performance do GPT-3.5.",
            link: "https://mistral.ai/"
        },
        { 
            id: "Gemini", name: "Gemini 1.0", year: 2023, group: "Multimodal", 
            desc: "Nativamente Multimodal. O Google responde com um modelo treinado desde o início para ver, ouvir e ler simultaneamente.",
            link: "https://deepmind.google/technologies/gemini/"
        },
        { 
            id: "Sora", name: "Sora", year: 2024, group: "Generativa", 
            desc: "Simulador de Mundo. Vídeos hiper-realistas que demonstram compreensão física emergente através de patches espaço-temporais.",
            link: "https://openai.com/sora"
        },
        { 
            id: "Claude3", name: "Claude 3 Opus", year: 2024, group: "Generativa", 
            desc: "A ascensão da Anthropic. Superou o GPT-4 em benchmarks, focado em segurança e janelas de contexto grandes.",
            link: "https://www.anthropic.com/news/claude-3-family"
        },
        { 
            id: "Grok", name: "Grok-1.5", year: 2024, group: "Generativa", 
            desc: "IA com atitude. A xAI de Elon Musk lança modelos com acesso em tempo real ao X (Twitter) e 'liberdade de expressão'.",
            link: "https://x.ai/"
        },
        { 
            id: "Llama3", name: "Llama 3", year: 2024, group: "OpenSource", 
            desc: "O padrão aberto. Desempenho de nível GPT-4 disponível gratuitamente para desenvolvedores, impulsionando inovações locais.",
            link: "https://llama.meta.com/llama3/"
        },
        { 
            id: "GPT4o", name: "GPT-4o", year: 2024, group: "Multimodal", 
            desc: "Omni Real-time. Conversação por voz com latência humana e capacidade de 'ver' e emocionar-se em tempo real.",
            link: "https://openai.com/index/hello-gpt-4o/"
        },
        { 
            id: "Gemini15", name: "Gemini 1.5 Pro", year: 2024, group: "Multimodal", 
            desc: "Memória Infinita. Introduziu janela de contexto de 1 a 2 milhões de tokens, capaz de ler bases de código inteiras ou vídeos longos.",
            link: "https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/"
        },
        { 
            id: "AlphaGeometry", name: "AlphaGeometry", year: 2024, group: "Raciocinio", 
            desc: "Matemática Avançada. Sistema híbrido (neural + simbólico) que resolveu problemas de geometria de nível olímpico.",
            link: "https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/"
        },
        { 
            id: "Claude35", name: "Claude 3.5 Sonnet", year: 2024, group: "Generativa", 
            desc: "O favorito dos Devs. Tornou-se o estado da arte em codificação e raciocínio visual, introduzindo a UI de 'Artifacts'.",
            link: "https://www.anthropic.com/news/claude-3-5-sonnet"
        },
        { 
            id: "Flux", name: "Flux.1", year: 2024, group: "Generativa", 
            desc: "Novo rei da imagem. Modelo de pesos abertos que superou o Midjourney em realismo e aderência ao prompt.",
            link: "https://blackforestlabs.ai/"
        },

        // --- Era 7: Raciocínio Profundo e Agentes (2024-2025) ---
        { 
            id: "OpenAI_o1", name: "OpenAI o1", year: 2024, group: "Raciocinio", 
            desc: "Project Strawberry. O primeiro modelo a usar 'Chain of Thought' em larga escala, pensando antes de responder para resolver ciência complexa.",
            link: "https://openai.com/o1/"
        },
        { 
            id: "ComputerUse", name: "Computer Use", year: 2024, group: "Agentes", 
            desc: "Claude Agentic. A Anthropic dá à IA a capacidade de controlar mouse e teclado para operar softwares como um humano.",
            link: "https://www.anthropic.com/news/3-5-models-and-computer-use"
        },
        { 
            id: "ProjectAstra", name: "Project Astra", year: 2024, group: "Agentes", 
            desc: "O Assistente Universal do Google. Visão e voz em tempo real que lembra onde você deixou seus óculos e entende seu ambiente.",
            link: "https://blog.google/technology/ai/google-io-2024-project-astra/"
        },
        { 
            id: "DeepSeek", name: "DeepSeek V3", year: 2025, group: "OpenSource", 
            desc: "A surpresa chinesa. Um modelo Mixture-of-Experts massivo e aberto que desafiou o topo dos rankings com custo de treino reduzido.",
            link: "https://www.deepseek.com/"
        }
    ],
    links: [
        // Fundamentos
        { source: "McCullochPitts", target: "Turing" },
        { source: "Turing", target: "Dartmouth" },
        { source: "Dartmouth", target: "LISP" },
        { source: "Dartmouth", target: "Perceptron" },
        { source: "Perceptron", target: "MinskyPapert" }, // A queda
        
        // Inverno e Renascimento
        { source: "MinskyPapert", target: "Winter1" },
        { source: "ELIZA", target: "Winter1" },
        { source: "Winter1", target: "ExpertSys" },
        { source: "ExpertSys", target: "Backprop" }, // A retomada
        { source: "Backprop", target: "LeNet" },
        
        // Era ML Moderno
        { source: "DeepBlue", target: "AlphaGo" }, // Jogos
        { source: "DeepBlue", target: "Watson" }, // IBM Lineage
        { source: "Watson", target: "BERT" }, // QA -> NLP
        { source: "Backprop", target: "LSTM" },
        { source: "LeNet", target: "AlexNet" },
        { source: "ImageNet", target: "AlexNet" },
        { source: "Word2Vec", target: "Transformer" }, // NLP lineage
        
        // Deep Learning Boom
        { source: "AlexNet", target: "ResNet" }, // Evolução CNN
        { source: "AlexNet", target: "GANs" },
        { source: "ResNet", target: "AlphaGo" }, // ResNets usadas no AlphaGo
        { source: "LSTM", target: "Transformer" }, // A troca de guarda
        
        // Transformers & LLMs
        { source: "Transformer", target: "BERT" },
        { source: "Transformer", target: "GPT3" },
        { source: "Transformer", target: "AlphaFold" },
        { source: "Transformer", target: "CLIP" },
        
        // Explosão Generativa
        { source: "GANs", target: "Diffusion" },
        { source: "CLIP", target: "Diffusion" }, // CLIP guia a Diffusion
        { source: "GPT3", target: "Copilot" },
        { source: "GPT3", target: "ChatGPT" },
        { source: "GPT3", target: "LLaMA" }, // Open source reaction
        
        // 2023-2024 Competition
        { source: "ChatGPT", target: "GPT4" },
        { source: "ChatGPT", target: "Claude3" }, // Rival
        { source: "ChatGPT", target: "Gemini" }, // Rival
        { source: "LLaMA", target: "Mistral" }, // Open source ecosystem
        { source: "LLaMA", target: "Llama3" },
        { source: "Mistral", target: "DeepSeek" }, // Open weights evolution
        
        // Multimodal & Video
        { source: "Diffusion", target: "Flux" },
        { source: "Diffusion", target: "Sora" },
        { source: "Gemini", target: "Gemini15" },
        { source: "GPT4", target: "GPT4o" },
        { source: "Gemini", target: "ProjectAstra" },
        
        // Reasoning & Agents
        { source: "GPT4", target: "OpenAI_o1" }, // Raciocínio
        { source: "AlphaGo", target: "AlphaGeometry" }, // Linhagem DeepMind
        { source: "Claude3", target: "Claude35" },
        { source: "Claude35", target: "ComputerUse" },
        { source: "Grok", target: "Llama3" } // Apenas conexão temporal/hype
    ]
};

// Configurações de Cores Expandidas
const colorScale = d3.scaleOrdinal()
    .domain([
        "Fundamentos", "Simbolica", "Crise", "Neural", "Marcos", 
        "Dados", "DeepLearning", "Arquitetura", "Generativa", 
        "Multimodal", "OpenSource", "Raciocinio", "Agentes"
    ])
    .range([
        "#64748b", // Fundamentos (Slate)
        "#10b981", // Simbolica (Emerald)
        "#ef4444", // Crise (Red)
        "#f59e0b", // Neural (Amber)
        "#2563eb", // Marcos (Royal Blue)
        "#8b5cf6", // Dados (Violet)
        "#db2777", // DeepLearning (Magenta)
        "#06b6d4", // Arquitetura (Cyan)
        "#f97316", // Generativa (Orange)
        "#d946ef", // Multimodal (Fuchsia)
        "#84cc16", // OpenSource (Lime - Novo)
        "#e11d48", // Raciocinio (Rose - Novo/Destaque)
        "#00d26a"  // Agentes (Bright Green - Novo)
    ]);

// Dimensões
const width = window.innerWidth;
const height = window.innerHeight;

// Setup do SVG
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", (event) => {
        g.attr("transform", event.transform);
    }))
    .append("g");

const g = svg.append("g");

// Setup da Simulação Física
const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(70))
    .force("charge", d3.forceManyBody().strength(-350))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(d => 32).iterations(3));

// Desenhar Links
const link = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link");

// Container para os Nós
const nodeGroup = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(data.nodes)
    .enter().append("g")
    .attr("class", "node-group")
    .attr("id", d => `node-${d.id}`) // Adicionar ID para navegação
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

// Círculos principais
const circles = nodeGroup.append("circle")
    .attr("class", "node")
    .attr("r", 18)
    .attr("fill", d => colorScale(d.group));

// Textos dentro do grupo
const labels = nodeGroup.append("text")
    .attr("class", "node-label")
    .attr("dy", 4)
    .attr("text-anchor", "middle")
    .text(d => d.year);

// Atualização da Simulação
simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    nodeGroup
        .attr("transform", d => `translate(${d.x},${d.y})`);
});

// --- Interações e Painel ---
let hideTimeout;
let activeNode = null; // Rastrear nó ativo para mobile

// Função centralizada de Highlight (usada por Mouse e Botões)
function highlightNode(nodeElement, d) {
    if (hideTimeout) clearTimeout(hideTimeout);
    
    // Remove highlight de todos
    d3.selectAll(".node-group").classed("active", false);
    d3.select("#container").classed("has-hover", true);
    
    const currentGroup = d3.select(nodeElement);
    currentGroup.classed("active", true);
    
    // Reset visual de todos (para garantir)
    d3.selectAll(".node").attr("r", 18).attr("stroke-width", 2);
    d3.selectAll(".node-label").text(n => n.year).style("font-weight", "normal").style("font-size", "10px");

    // Aplica highlight visual
    currentGroup.select(".node")
        .transition()
        .duration(300)
        .ease(d3.easeCubicOut)
        .attr("r", 28)
        .attr("stroke", "#fff")
        .attr("stroke-width", 3);
    
    currentGroup.select("text")
        .text(d.name)
        .style("font-weight", "bold")
        .style("font-size", "14px");

    // Preenche Painel
    const panel = d3.select("#info-panel");
    d3.select("#panel-title").text(d.name);
    d3.select("#panel-year").text(d.year + (d.group ? ` • ${d.group}` : ""));
    d3.select("#panel-desc").text(d.desc);
    d3.select("#panel-link").attr("href", d.link);

    panel.classed("hidden", false);
    activeNode = d;

    // Atualiza contador mobile
    const index = data.nodes.indexOf(d);
    d3.select("#current-node-index").text(index + 1);
}

function resetHighlight(nodeElement, d) {
    d3.select("#container").classed("has-hover", false);
    d3.select(nodeElement).classed("active", false);

    d3.select(nodeElement).select(".node")
        .transition()
        .duration(500)
        .ease(d3.easeCubicOut)
        .attr("r", 18)
        .attr("stroke", "var(--bg-color)")
        .attr("stroke-width", 2);

    d3.select(nodeElement).select("text")
        .text(d.year)
        .style("font-weight", "normal")
        .style("font-size", "10px");

    hideTimeout = setTimeout(() => {
        // Só esconde se não tiver outro ativo (para navegação rápida)
        if (!d3.select(".node-group.active").size()) {
            d3.select("#info-panel").classed("hidden", true);
        }
    }, 200);
}

// Eventos de Mouse (Desktop)
nodeGroup.on("mouseover", function(event, d) {
    highlightNode(this, d);
});

nodeGroup.on("mouseout", function(event, d) {
    resetHighlight(this, d);
});

// Painel Interações
const panel = d3.select("#info-panel");
panel.on("mouseenter", () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    panel.classed("hidden", false);
    d3.select("#container").classed("has-hover", true);
});
panel.on("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        panel.classed("hidden", true);
        d3.select("#container").classed("has-hover", false);
    }, 200);
});

// --- Navegação Mobile ---
// Ordenar nós por ano para navegação sequencial
data.nodes.sort((a, b) => a.year - b.year);
d3.select("#total-nodes").text(data.nodes.length);

let currentNodeIndex = -1;

function navigateToNode(index) {
    if (index < 0) index = data.nodes.length - 1;
    if (index >= data.nodes.length) index = 0;
    
    currentNodeIndex = index;
    const nodeData = data.nodes[index];
    const nodeElement = document.getElementById(`node-${nodeData.id}`);
    
    if (nodeElement) {
        // Simula o highlight
        highlightNode(nodeElement, nodeData);
        
        // Centraliza a câmera no nó (Zoom)
        const transform = d3.zoomIdentity
            .translate(width / 2, height / 2) // Centro da tela
            .scale(1.5) // Zoom level
            .translate(-nodeData.x, -nodeData.y); // Move para o nó

        svg.transition()
            .duration(750)
            .call(svg.node().__zoom.transform, transform); // Hack para acessar o behavior de zoom
            // Alternativa correta: d3.select("#chart svg").call(zoom.transform, transform); 
            // Mas precisamos da referencia 'zoom' que foi definida inline.
            // Vamos corrigir isso abaixo.
    }
}

// Botões Mobile
d3.select("#btn-prev").on("click", () => {
    navigateToNode(currentNodeIndex - 1);
});

d3.select("#btn-next").on("click", () => {
    navigateToNode(currentNodeIndex + 1);
});

// Corrigindo a referência de Zoom para funcionar com o clique
const zoomBehavior = d3.zoom().on("zoom", (event) => {
    g.attr("transform", event.transform);
});
d3.select("svg").call(zoomBehavior);

// Sobrescrevendo a função de navegação para usar a referência correta
navigateToNode = function(index) {
    if (index < 0) index = data.nodes.length - 1;
    if (index >= data.nodes.length) index = 0;
    currentNodeIndex = index;
    
    const nodeData = data.nodes[index];
    const nodeElement = document.getElementById(`node-${nodeData.id}`); // D3 select by ID
    
    if (nodeElement) {
        highlightNode(nodeElement, nodeData);
        
        // Ajuste de offset vertical para mobile
        // Se a largura for menor que 768px (mobile), o painel está embaixo.
        // Então o centro deve ser deslocado para cima.
        let verticalOffset = 0;
        if (window.innerWidth < 768) {
            verticalOffset = height * 0.25; // Move o centro visual 25% para cima
        }

        // Centraliza com animação
        d3.select("svg").transition()
            .duration(750)
            .call(zoomBehavior.transform, d3.zoomIdentity
                .translate(width / 2, height / 2 - verticalOffset) // Aplica o offset
                .scale(1.5)
                .translate(-nodeData.x, -nodeData.y)
            );
    }
};


// Funções de Drag
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this).classed("dragging", true);
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    d3.select(this).classed("dragging", false);
}

window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    svg.attr("width", newWidth).attr("height", newHeight);
    simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
    simulation.alpha(1).restart();
});