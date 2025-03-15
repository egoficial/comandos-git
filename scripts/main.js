"use strict";

/**------------------------------------------------------------------------
 *                           ALTERAR MODO ESCURO
 *------------------------------------------------------------------------**/
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
}

/**------------------------------------------------------------------------
 *                      CARREGAR PREFERÊNCIA DO TEMA
 *------------------------------------------------------------------------**/
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

/**------------------------------------------------------------------------
 *                      CARREGAR E PROCESSAR O README
 *------------------------------------------------------------------------**/
// Initial fetch of README content
fetch("./content/README.md")
    .then(response => {
        if (!response.ok) throw new Error("Erro ao carregar arquivo");
        return response.text();
    })
    .then(data => {
        markdownContent = data; // Store the content globally
        const htmlContent = marked.parse(data, {
            sanitize: true,
            breaks: true
        });
        document.getElementById("content").innerHTML = htmlContent;
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById("content").innerHTML = "Erro ao carregar o conteúdo.";
    });

/**------------------------------------------------------------------------
 *                             FUNÇÃO DE BUSCA
 *------------------------------------------------------------------------**/
document.getElementById("searchInput").addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const content = document.getElementById("content");
    const elements = content.getElementsByTagName("*");

    for (let element of elements) {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
            const text = element.textContent.toLowerCase();
            element.style.display = text.includes(searchTerm) ? "" : "none";
        }
    }
});

/**------------------------------------------------------------------------
 *                           FILTRAR POR CATEGORIA
 *------------------------------------------------------------------------**/
let markdownContent = "";

function filterContentByCategory(category) {
    const contentDiv = document.getElementById("content");
    
    if (category === "all") {
        contentDiv.innerHTML = marked.parse(markdownContent);
        return;
    }

    const sections = markdownContent.split("\n## ");
    
    const filteredSections = sections.filter(section => {
        const categoryMap = {
            "basic": ["Começando", "Básico", "Configuração"],
            "branch": ["Branch", "Merge", "Rebase"],
            "remote": ["Remoto", "Clone", "Push", "Pull"]
        };

        return categoryMap[category].some(keyword => 
            section.toLowerCase().includes(keyword.toLowerCase())
        );
    });

    const filteredContent = filteredSections.length ? 
        "## " + filteredSections.join("\n## ") : 
        "Nenhum conteúdo encontrado para esta categoria.";

    contentDiv.innerHTML = marked.parse(filteredContent);
        document.getElementById("content").innerHTML = "Erro ao carregar o conteúdo.";
    };

    document.getElementById("categoryFilter").addEventListener("change", (e) => {
        filterContentByCategory(e.target.value);
});