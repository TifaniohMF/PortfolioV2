import { SkillCategory, Project, EducationItem } from '../types';

export const PERSONAL_INFO = {
  fullName: "RANDRIANOELINA Tifanioh Mahefa Fandresentsoa",
  shortName: "Tifanioh RANDRIANOELINA",
  initials: "TR",
  role: {
    en: "Mathematics & Computer Science Student",
    fr: "Étudiant en Mathématiques & Informatique"
  },
  institution: {
    en: "University of Antananarivo",
    fr: "Université d'Antananarivo"
  },
  faculty: {
    en: "Faculty of Science",
    fr: "Faculté des Sciences"
  },
  location: "Antananarivo, Madagascar",
  email: "randrianoelinatifanioh@gmail.com",
  github: "https://github.com/TifaniohMF",
  githubUsername: "TifaniohMF",
  linkedin: "https://www.linkedin.com/in/tifanioh-mahefa-fandresentsoa-randrianoelina-205747361",
  tagline: "→ solve, prove, code",
  bio: {
    en: "Passionate about mathematics, numerical analysis, and programming. I develop mathematical algorithms and tools in C/C++ and Python.",
    fr: "Passionné par les mathématiques, l'analyse numérique et la programmation. Je développe des algorithmes mathématiques et des programmes en C/C++ et Python."
  },
  aboutParagraphs: {
    en: [
      "Currently pursuing studies in Mathematics and Computer Science at the University of Antananarivo, I focus on applying theoretical mathematical concepts to practical programming.",
      "My interests include numerical linear algebra (matrix solving, factorizations), numerical root finding, polynomial algebra, and algorithm implementation in C, C++, and Python.",
      "My goal is to deepen my knowledge in applied mathematics, numerical computing, and software development."
    ],
    fr: [
      "Actuellement en cursus de Mathématiques et Informatique à l'Université d'Antananarivo, je m'intéresse à l'application concrète des concepts mathématiques par la programmation.",
      "Mes centres d'intérêt portent sur l'algèbre linéaire numérique (résolution de systèmes, décompositions matricielles), l'analyse numérique (recherche de racines d'équations), les polynômes et l'implémentation d'algorithmes en C, C++ et Python.",
      "Mon objectif est d'approfondir mes connaissances en mathématiques appliquées, calcul numérique et développement logiciel."
    ]
  },
  quote: {
    text: {
      en: "Computer science is no more about computers than astronomy is about telescopes. Mathematics and algorithms are its true essence.",
      fr: "L'informatique n'est pas plus la science des ordinateurs que l'astronomie n'est celle des télescopes. Les mathématiques et les algorithmes en constituent l'essence même."
    },
    author: "Edsger W. Dijkstra",
    role: {
      en: "Turing Award Laureate & Computer Science Pioneer",
      fr: "Pionnier de l'informatique & Lauréat du Prix Turing"
    }
  },
  stats: [
    { label: { en: "Degree Focus", fr: "Parcours" }, value: "Student Math/CS" },
    { label: { en: "Core Languages", fr: "Langages clés" }, value: "C, C++, Python, LaTeX" },
    { label: { en: "Open Repositories", fr: "Dépôts Publics" }, value: "4+ Active Projects" },
    { label: { en: "Domain", fr: "Domaine" }, value: "Scientific Computing" }
  ]
};

export const getSkillCategories = (lang: 'en' | 'fr'): SkillCategory[] => [
  {
    id: "math",
    title: lang === 'fr' ? "Compétences Mathématiques" : "Mathematical Competencies",
    subtitle: lang === 'fr' ? "Fondements théoriques et mathématiques appliquées" : "Theoretical foundations and applied mathematics",
    iconName: "Binary",
    accentColor: "sky",
    items: [
      {
        name: lang === 'fr' ? "Algèbre linéaire numérique" : "Numerical Linear Algebra",
        subtext: lang === 'fr'
          ? "Espaces vectoriels, décompositions matricielles (LU, Cholesky, QR), valeurs & vecteurs propres, conditionnement."
          : "Vector spaces, matrix factorizations (LU, Cholesky, QR), eigenvalues & eigenvectors, conditioning.",
        tags: ["Matrices", "LU / Cholesky", "Spectral Theory"]
      },
      {
        name: lang === 'fr' ? "Analyse numérique & Convergence" : "Numerical Analysis & Convergence",
        subtext: lang === 'fr'
          ? "Méthodes itératives, discrétisation, analyse d'erreur résiduelle, stabilité numérique."
          : "Iterative methods, discretization, residual error analysis, numerical stability.",
        tags: ["Residual Error", "Stability", "Interpolation"]
      },
      {
        name: lang === 'fr' ? "Optimisation mathématique" : "Mathematical Optimization",
        subtext: lang === 'fr'
          ? "Optimisation sous contraintes, descente de gradient, programmation linéaire et convexe."
          : "Constrained optimization, gradient descent, linear and convex programming.",
        tags: ["Gradient", "Convexity", "Duality"]
      },
      {
        name: lang === 'fr' ? "Probabilités & Statistique" : "Probability & Statistics",
        subtext: lang === 'fr'
          ? "Lois de probabilité usuelles, inférence statistique, et modélisation."
          : "Standard distributions, statistical inference, and modeling.",
        tags: ["Inference", "Sampling"]
      },
      {
        name: lang === 'fr' ? "Analyse réelle et complexe" : "Real & Complex Analysis",
        subtext: lang === 'fr'
          ? "Calcul différentiel et intégral, séries de fonctions, topologie métrique, convergence uniforme."
          : "Differential & integral calculus, series of functions, metric topology, uniform convergence.",
        tags: ["Calculus", "Integration", "Topology"]
      }
    ]
  },
  {
    id: "languages",
    title: lang === 'fr' ? "Langages & Outils de Calcul" : "Languages & Computing Frameworks",
    subtitle: lang === 'fr' ? "Développement logiciel scientifique" : "High-performance scientific computing",
    iconName: "Code2",
    accentColor: "teal",
    items: [
      {
        name: "C / C++ (ISO Standard)",
        subtext: lang === 'fr'
          ? "Gestion manuelle de la mémoire, pointeurs, structures de données optimisées, templates, exécution ultra-rapide."
          : "Low-level memory management, pointers, optimized data structures, templates, high-speed computational routines.",
        tags: ["Systems", "Memory Control", "Algorithms", "Performance"]
      },
      {
        name: "Python (NumPy, SciPy)",
        subtext: lang === 'fr'
          ? "Écosystème de calcul scientifique, manipulation tensorielle/matricielle, calcul symbolique, visualisation."
          : "Scientific computing ecosystem, vectorized tensor/matrix manipulation, symbolic math, visualization.",
        tags: ["NumPy", "SciPy", "Pandas", "Scikit-Learn"]
      },
      {
        name: "LaTeX (Academic Typesetting)",
        subtext: lang === 'fr'
          ? "Rédaction scientifique rigoureuse, formules mathématiques complexes, rapports académiques et monographies."
          : "Rigorous scientific typesetting, complex mathematical notation, academic monographs and proofs.",
        tags: ["Typography", "Formulas", "Monographs", "TikZ"]
      },
      {
        name: "Modern Web & Visualizations",
        subtext: lang === 'fr'
          ? "Interfaces interactives, visualisations scientifiques sur le Web, HTML5/CSS3, TypeScript & React."
          : "Interactive interfaces, dynamic mathematical graphs, HTML5/CSS3, TypeScript & modern web standards.",
        tags: ["TypeScript", "Canvas", "Dynamic Graphs"]
      }
    ]
  },
  {
    id: "tools",
    title: lang === 'fr' ? "Environnement & Workflow" : "Environment & Developer Tooling",
    subtitle: lang === 'fr' ? "Productivité et ingénierie logicielle" : "Productivity & software engineering",
    iconName: "Terminal",
    accentColor: "gold",
    items: [
      {
        name: "Linux",
        subtext: lang === 'fr'
          ? "Commandes Shell / Bash, automatisation par scripts, compilation GCC/Clang, gestionnaire de paquets."
          : "Shell / Bash scripting, system administration.",
        tags: ["Bash", "Automation"]
      },
      {
        name: "Git & GitHub",
        subtext: lang === 'fr'
          ? "Contrôle de version distribué, flux de travail par branches, documentation d'API et archivage de code."
          : "Distributed version control, branching strategies, semantic versioning, open-source documentation.",
        tags: ["Git", "Version Control", "CI/CD", "Open Source"]
      },
      {
        name: "Visual Studio Code & Tooling",
        subtext: lang === 'fr'
          ? "Environnement de développement intégré, débogage C++ avec GDB, extension Python et intégration LaTeX."
          : "Integrated development workflow, native C++ debugging with GDB, Python virtualenvs, LaTeX workshop.",
        tags: ["IDE", "GDB Debugger", "Extensions", "Clangd"]
      },
      {
        name: "Jupyter Notebook & Data Lab",
        subtext: lang === 'fr'
          ? "Prototypage interactif, calcul symbolique (SymPy), validation de théorèmes et tracé de fonctions."
          : "Interactive prototyping, symbolic computation, theorem verification, mathematical curve plotting.",
        tags: ["Interactive", "SymPy", "Matplotlib", "Validation"]
      }
    ]
  }
];

export const getProjects = (lang: 'en' | 'fr'): Project[] => [
  {
    id: "solve-linear-system",
    title: "SolveLinearSystem",
    subtitle: lang === 'fr' 
      ? "Résolution de systèmes linéaires en Python" 
      : "Linear System Solvers in Python",
    description: lang === 'fr'
      ? "Scripts Python pour la résolution de systèmes d'équations linéaires (Ax = b). Implémentation des méthodes directes classiques (élimination de Gauss avec pivot, factorisation LU, Cholesky) et de méthodes itératives (Jacobi, Gauss-Seidel)."
      : "Python scripts for solving linear equation systems (Ax = b). Implements standard direct methods (Gaussian elimination with pivoting, LU factorization, Cholesky) and iterative methods (Jacobi, Gauss-Seidel).",
    mathTopic: lang === 'fr' ? "Algèbre linéaire numérique" : "Numerical Linear Algebra",
    technologies: ["Python", "NumPy", "Linear Algebra"],
    githubUrl: "https://github.com/TifaniohMF/SolveLinearSystem",
    iconName: "Grid",
    keyFeatures: lang === 'fr' ? [
      "Élimination de Gauss avec choix du pivot partiel",
      "Décomposition LU et factorisation de Cholesky",
      "Méthodes itératives : Jacobi et Gauss-Seidel avec seuil de tolérance",
      "Exemples de calcul et vérification sur différentes matrices"
    ] : [
      "Gaussian elimination with partial pivoting",
      "LU decomposition and Cholesky factorization",
      "Iterative methods: Jacobi and Gauss-Seidel with tolerance threshold",
      "Example test matrices and validation"
    ],
    formula: "A \\cdot x = b",
    complexity: {
      time: "Direct: O(n³) | Itératif: O(k · n²)",
      space: "O(n²)"
    },
    sampleCode: {
      language: "python",
      filename: "lu.py",
      code: `import numpy as np

def decomposition_lu(A):
    """
    Décomposition LU d'une matrice carré
    """
    n = len(A)
    # Init : L with 1 in diagonal, U with 0
    L = np.eye(n) 
    U = np.zeros((n,n))
    for i in range(n):
        # Calculation  rows i of U
        for k in range(i,n):
            s1 = sum(L[i][j]*U[j][k] for j in range(i))
            U[i][k] = A[i][k] - s1
        
        # Calculation L
        for k in range(i+1, n):
            s2 = sum(L[k][j]*U[j][i] for j in range(i))
            if U[i][i] == 0:
                raise ValueError("Zero pivot encountered")
            L[k][i] = (A[k][i] - s2)/U[i][i]
    return L,U`
    },
    theoreticalNotes: lang === 'fr'
      ? "Permet de résoudre le système en deux étapes triangulaires simples : Ly = b (descente) puis Ux = y (remontée)."
      : "Solves the system in two triangular substitution steps: Ly = b (forward) then Ux = y (back substitution)."
  },
  {
    id: "resolution-equation-non-lineaire",
    title: "ResolutionEquationNonLineaire",
    subtitle: lang === 'fr'
      ? "Méthodes numériques pour équations f(x) = 0"
      : "Numerical Methods for f(x) = 0 Equations",
    description: lang === 'fr'
      ? "Programmes en Python et C++ pour trouver les racines approchées d'équations non linéaires à une variable : méthode de dichotomie, méthode de Newton-Raphson, méthode de la sécante et méthode du point fixe."
      : "Python and C++ implementations of standard 1D root-finding methods: bisection (dichotomy), Newton-Raphson, secant method, and fixed-point iteration.",
    mathTopic: lang === 'fr' ? "Analyse numérique" : "Numerical Analysis",
    technologies: ["Python", "Analyse Numérique"],
    githubUrl: "https://github.com/TifaniohMF/ResolutionEquationNonLineaire",
    iconName: "Activity",
    keyFeatures: lang === 'fr' ? [
      "Méthode de dichotomie (bisection)",
      "Méthode de Newton-Raphson (calcul de la tangente)",
      "Méthode de la sécante et point fixe",
      "Affichage des itérations et de la précision obtenue"
    ] : [
      "Bisection method",
      "Newton-Raphson method",
      "Secant and fixed-point methods",
      "Displays iteration history and accuracy"
    ],
    formula: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
    complexity: {
      time: "Newton: convergence quadratique | Dichotomie: O(log(1/ε))",
      space: "O(1)"
    },
    sampleCode: {
      language: "python",
      filename: "newton.py",
      code: `def method_newton(f, df, x0, tol=1e-10, max_iter=100):
    """
    Résout f(x) = 0 par la méthode de Newton.

    Paramètres :
    - f : fonction à résoudre
    - df : dérivée de f
    - x0 : valeur initiale
    - tol : tolérance sur la différence successive
    - max_iter : nombre maximum d'itérations

    Retourne :
    - Liste des approximations successives
    """
    x_vals = [x0]
    for i in range(max_iter):
        x = x_vals[-1]
        fx = f(x)
        dfx = df(x)

        if dfx == 0:
            raise ValueError("Dérivée nulle à x = {}. Méthode de Newton échoue.".format(x))

        x_new = x - fx / dfx
        x_vals.append(x_new)

        print(f"Étape {i+1} : x = {x_new:.6f}, f(x) = {f(x_new):.6f}")

        if abs(x_new - x) < tol:
            break

    else:
        raise RuntimeError("La méthode n'a pas convergé après {} itérations.".format(max_iter))

    return x_vals`
    },
    theoreticalNotes: lang === 'fr'
      ? "La méthode de Newton utilise la dérivée pour converger rapidement vers la racine lorsque l'estimation initiale est proche."
      : "Newton's method uses the derivative to converge rapidly to the root when given a suitable initial guess."
  },
  {
    id: "polynomial",
    title: "Polynomial",
    subtitle: lang === 'fr'
      ? "Opérations et calculs sur les polynômes"
      : "Polynomial Operations & Horner Evaluation",
    description: lang === 'fr'
      ? "Implémentation d'une structure de polynômes en Python pour gérer les opérations de base : addition, multiplication, calcul de la dérivée et évaluation efficace par la méthode de Horner."
      : "Python code for polynomial operations: addition, multiplication, formal differentiation, and Horner evaluation.",
    mathTopic: lang === 'fr' ? "Algèbre & Calcul" : "Algebra & Polynomials",
    technologies: ["Python", "Algorithmique"],
    githubUrl: "https://github.com/TifaniohMF/Polynomial",
    iconName: "FunctionSquare",
    keyFeatures: lang === 'fr' ? [
      "Représentation d'un polynôme par tableau de coefficients",
      "Évaluation par le schéma de Horner en O(n)",
      "Opérations arithmétiques (addition, multiplication)",
      "Calcul de la dérivée formelle"
    ] : [
      "Polynomial representation with coefficient arrays",
      "Horner's scheme evaluation in O(n)",
      "Basic arithmetic (addition, multiplication)",
      "Formal derivative computation"
    ],
    formula: "P(x) = a_0 + x(a_1 + x(a_2 + \\dots + x \\cdot a_n))",
    complexity: {
      time: "Évaluation (Horner): O(n) | Multiplication: O(n²)",
      space: "O(n)"
    },
    sampleCode: {
      language: "cpp",
      filename: "polynomial.cpp",
      code: `#include <vector>

class Polynomial {
private:
    std::vector<double> coeffs;

public:
    Polynomial(const std::vector<double>& c) : coeffs(c) {}

    // Schéma de Horner pour évaluer P(x)
    double evaluate(double x) const {
        if (coeffs.empty()) return 0.0;
        double result = coeffs.back();
        for (int i = static_cast<int>(coeffs.size()) - 2; i >= 0; --i) {
            result = result * x + coeffs[i];
        }
        return result;
    }

    // Dérivée du polynôme
    Polynomial derivative() const {
        if (coeffs.size() <= 1) return Polynomial({0.0});
        std::vector<double> d_coeffs(coeffs.size() - 1);
        for (size_t i = 1; i < coeffs.size(); ++i) {
            d_coeffs[i - 1] = coeffs[i] * static_cast<double>(i);
        }
        return Polynomial(d_coeffs);
    }
};`
    },
    theoreticalNotes: lang === 'fr'
      ? "L'algorithme de Horner permet d'évaluer un polynôme de degré n avec seulement n multiplications et n additions."
      : "Horner's algorithm evaluates a degree-n polynomial using only n multiplications and n additions."
  },
  {
    id: "math-archive",
    title: "MathArchive",
    subtitle: lang === 'fr'
      ? "Notes de cours, fiches LaTeX et exercices"
      : "Course Notes, LaTeX Documents & Exercises",
    description: lang === 'fr'
      ? "Dépôt regroupant des fiches de synthèse en LaTeX, des résumés de cours universitaires et de petits scripts Python/C pour tester des exercices d'arithmétique et d'analyse."
      : "Personal repository containing LaTeX revision sheets, university course notes, and small Python/C scripts for practicing math and algorithm exercises.",
    mathTopic: lang === 'fr' ? "Notes & Exercices" : "Notes & Practice",
    technologies: ["LaTeX", "Python", "C++", "Markdown"],
    githubUrl: "https://github.com/TifaniohMF/MathArchive",
    iconName: "BookOpen",
    keyFeatures: lang === 'fr' ? [
      "Fiches de cours et résumés rédigés en LaTeX",
      "Scripts d'exercices (ex: test de primalité, crible d'Ératosthène)",
      "Notes sur les démonstrations de cours en mathématiques",
      "Organisation des révisions universitaires"
    ] : [
      "LaTeX summaries and course notes",
      "Exercise scripts (e.g. prime testing, Sieve of Eratosthenes)",
      "Mathematical proof notes for university courses",
      "Study and revision materials"
    ],
    formula: "\\forall n \\ge 2, \\quad \\text{crible d'Ératosthène}",
    complexity: {
      time: "Scripts de calcul & documents LaTeX",
      space: "Dépôt GitHub organisé"
    },
    sampleCode: {
      language: "latex",
      filename: "crible.tex",
      code: String.raw`\documentclass[a4paper, 12pt, french]{report}

% ========================
% IMPORTATION DES PACKAGES
% ========================

\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[margin=2cm]{geometry}
\usepackage{lmodern}
\usepackage{theorem}
\usepackage{amsfonts, amsmath, amssymb}
\usepackage{babel}

\pagestyle{headings}

\renewcommand{\familydefault}{\sfdefault}

\theoremstyle{break}
\theoremheaderfont{\scshape}
\theorembodyfont{\upshape}

\newtheorem{defin}{Définition}[section]
\newtheorem{prop}[defin]{Proposition}
\newtheorem{theo}[defin]{Théorème}
\newtheorem{coro}[defin]{Corollaire}


\title{PROBABILITÉ}
\author{}
\date{\today}

\begin{document}

\maketitle

\textbf{PRÉCISION} \\
Ceci n'est pas à priori un book, cette document est un réceuille de note pour comprendre et approfondir mes connaissances en mathématiques.
Ce document est crée à partir du language de programmation latex. Même si c'est un note si vous trouvez que cela peut vous être aider que ce soit dans vous exercice ou juste pour comprendre.
Vous pouvez le consulter et même le télécharger.
Mais je précise que, j'ai les reformuler moi même selon mes propres compréhension.

\tableofcontents

\chapter{ESPACE PROBABILISÉ}

\section{Vocabulaire}

\begin{center}
	\begin{tabular}{|p{8cm}|p{3cm}|}
	\hline
	Vocabulaire & Notation \\ \hline
	Résultat possible & $\omega$ \\
	Tous les résultat possible & $\Omega$ \\
	Évenement A & A \\
	Évenement contraire & $A^{c}$ \\
	Sous ensemble d'évenement & $A \subset \Omega$ \\
	Événement certain & $\Omega$ \\
	Évenement impossible & $\emptyset$ \\
	Évenement A ou B (non exclusif) & $A \cup B$ \\
	Évenement A et B & $A \cap B$ \\
	\hline
\end{tabular}
\end{center}
Prénons un exemple, si on lance un dé à 6 face. On a $\omega = 5$, $\Omega = \{1,2,3,4,5,6\}$, $A = \{1,3,5\}$.\\
On dit que deux évenements sont incompatibles si $A \cap B = \emptyset$.

\section{Probabilité}
$\mathcal{F} = P(\Omega), \; \mathcal{F}$ est ici une partie de $\Omega$ où $\Omega$ est l'ensemble de tous les résultats possibles. $\mathcal{F}$ est appelé un tribus et ($\mathcal{F}, \Omega$) un espace mesurable.

\begin{defin}
	Une mesure de probabilité (ou probabilité) est une application P de $\mathcal{F}$ vers [0, 1] qui verifie les conditions suivantes:
	\begin{enumerate}
		\item P($\Omega$) = 1 et P($\emptyset$) = 0,
		\item Soit $(A_{i})_{i \in \mathbb{N}}$ un collection de famille d'évenement finie ou dénombrable. Si les $A_{i}$ sont deux à deux disjoints, on a $P(\displaystyle\bigcup_{i \in  \mathbb{N}}A_{i}) = \displaystyle\sum_{i \in \mathbb{N}} P(A_{i})$ ($\sigma$-additivité)
	\end{enumerate}
	Le triplet $(\Omega, \mathcal{F}, P)$ est un espace de probabilité. On dit qu'un probabilité d'un évenement A est presque sûr si $P(A) = 1$, il est négligeable si $P(A)=0$.
\end{defin} 

\begin{prop}
	\begin{enumerate}
		\item $P(A^{c}) = 1 - P(A)$,
		\item $P(A \cup B) = P(A) + P(B) - P(A \cap B)$,
		\item Si $A \subset B$, alors $P(A) \leq P(B)$,
		\item Soit $(A_{i})_{i \in \mathbb{N}}$ une famille d'évenement finie ou dénombrable deux à deux disjoints tel que $\displaystyle\sum_{i \in \mathbb{N}} P(A_{1}) = 1$. On a\\ $P(B) = \displaystyle\sum_{i \in \mathbb{N}} P(A_{i} \cap B)$ (\textbf{Formule de décomposition})
	\end{enumerate}
\end{prop}
\textit{Preuve.}
\begin{enumerate}
	\item Montrons que $P(A^{c}) = 1 - P(A)$,\\
	On sait que $A \cup A^{c} = \Omega$, Comme $A$ et $A^{c}$ sont disjoints. D'après $\sigma$-additivité, on a $P(A \cup A^{c}) = P(A) + P(A^{c})$. Or $P(A \cup A^{c})=P(\Omega)=1$. Donc $P(A^{c}) = 1 - P(A)$.
	\item Montrons que $P(A \cup B) = P(A) + P(B) - P(A \cap B)$,\\
		On peut décomposer $A \cup B$ comme suit, $A \cup B = A \cup (B \cap A^{c})$. A et $B \cap A^{c}$ sont disjoints. D'après $\sigma$-additivité, on a $P(A \cup (B \cap A^{c})) = P(A) + P(B \cap A^{c})$. En décomposant aussi B, on a $B = (B \cap A) \cup (B \cup A^{c})$. Par suit, on a $P(B) = P(B \cap A) \cup (B \cup A^{c}) = P(B \cap A) + P(B \cup A^{c})$. On a alors $P(B \cup A^{c}) = P(B) - P(A \cap B)$. D'où $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
    \item Montrons que si $A \subset B$, alors $P(A) \leq P(B)$,\\
     Supposons que $A \subset B$, considérons deux ensembles deux à deux disjoints A et B \textbackslash A. On a $B = A \cup (B \cap A^{c})$ (car par hypothèse $A \cup B = B$). Par suite $P(B) = P(A) + P(B \cap A^{c}$). Comme $P(B \cap A^{c}) \geq 0$. \\Donc on peut en conclure que $P(B)>P(A)$.
     \item On peut écrire $B = B \cap \Omega =  B \cap (\displaystyle\bigcup_{i \in I} A_{i})$. D'après la distributivité on a $\displaystyle B = \bigcup_{i \in I} (B \cap A_{i})$. 
     Comme les $A_{i}$ sont deux à deux disjoints alors ($B \cap A_{i}$) sont deux à deux disjoints. Donc on a $P(B) = P(\displaystyle\bigcup_{i} (B \cap A_{i}) = \displaystyle\sum_{i \in I} P(B \cap A_{i}))$.\\
     D'où $\displaystyle P(B) = \displaystyle\sum_{i \in I} P(B \cap A_{i})$.  \marginpar{$\square$}
\end{enumerate}

\section{Probabilité sur des ensembles finie ou dénombrable}
\begin{prop}
     Pour tout $A \subset \mathcal{F}$, on a $P(A) = \displaystyle\sum_{\omega \in A} P(\{ \omega\})$.
\end{prop}
\textit{Preuve.}\\
A peut s'écrire sous la forme $A = (A \cap \omega)_{\omega \in \Omega} = (A \cap \{\omega\})_{\omega \in A} \cup (A \cap \{\omega\})_{\omega \not\in A}$. Ces deux ensembles sont deux à deux disjoints. Donc d'après $\sigma$-additivité, on a
$P(A) = P( (A \cap \{\omega\})_{\omega \in A} \cup (A \cap \{\omega\})_{\omega \not\in A}) = P((A \cap \{\omega\})_{\omega \in A}) + P((A \cap \{\omega\})_{\omega \not\in A}) = \displaystyle\sum_{\omega\in A} P(A \cap \{ \omega \}) + \displaystyle\sum_{\omega \not\in A} P(A \cap \{ \omega \}) = \sum_{\omega \in A} P(\{ \omega \})$.\\
D'où $P(A) = \displaystyle\sum_{\omega \in A} P(\{ \omega\})$.

\begin{defin}
        $P(\{ \omega \}) = \frac{1}{|\Omega|}$
\end{defin}

\begin{coro}
       $P(A) = \frac{|A|}{|\Omega|}$
\end{coro}

\section{Dénombrement}
\begin{enumerate}
       \item Le nombre de permutation de $\{1, 2, \cdots, n\}$ dans lui même est $n!$.
       \item Le nombre d' arragement $A_{n}^{k} = \displaystyle\frac{n!}{(n-k)!}$.
       \item Le coefficient binomial $C_{n}^{k} = \displaystyle\frac{n!}{k!(n-k)!}$.
\end{enumerate}

\section{Probabilité conditionnelle et Indépendance}
\begin{defin}
     $P(A | B) = \frac{P(A \cap B)}{P(B)}$
\end{defin}

\begin{prop}
\textbf{Formule de décomposition :} $P(A) = P(A | B)P(B) + P(A | B^{c}) P(B^{c})$ \\
\textbf{Formule de Bayes :} $ P(B | A) = \displaystyle\frac{P(A | B) P(B)}{P(A | B)P(B) + P(A | B^{c}) P(B^{c})}$
\end{prop}

\begin{defin}
On dit que deux événements A et B sont indépendants si $P(A \cap B) = P(A)P(B)$
\end{defin}
Si deux événements A et B sont indépendants, alors la probabilité conditionnelle devient $P(A|B)=P(A)$.

\chapter{VARIABLES ALÉATOIRES}
\section{Exemple de loi}
\subsection*{Loi de Bernouilli de paramètres p}
$P(X=0) = 1-p$ et $P(X=1)=p$

\subsection*{Loi uniforme}
$P(X = k)=\displaystyle\frac{1}{N}$.

\subsection*{Loi Binomiale}
$P(X=k)= \left(\begin{array}{c} n \\ k\end{array}\right) p^{k}(1-p)^{n-k}$.

\subsection*{Loi de poison de paramètres $\lambda$}
$P(X=k)=e^{-\lambda} \frac{\lambda^{k}}{k!}$

\subsection*{Loi géometrique de paramètres $\lambda$}
$P(X=k)=(1-\lambda)^{k-1}\lambda$
\end{document} `
    },
    theoreticalNotes: lang === 'fr'
      ? "Centralise les supports d'apprentissage et les programmes d'entraînement en mathématiques et informatique."
      : "Centralizes study notes and training code in mathematics and computer science."
  }
];

export const getEducationData = (lang: 'en' | 'fr'): EducationItem[] => [
  {
    period: lang === 'fr' ? "En cours d'études (Cursus Universitaire)" : "Currently Enrolled (University Degree)",
    degree: lang === 'fr'
      ? "Licence en Mathématiques & Informatique"
      : "Bachelor / Degree Program in Mathematics & Computer Science",
    institution: lang === 'fr'
      ? "Université d'Antananarivo — Faculté des Sciences"
      : "University of Antananarivo — Faculty of Science",
    location: "Antananarivo, Madagascar",
    description: lang === 'fr'
      ? "Formation universitaire d'excellence combinant les mathématiques fondamentales (algèbre générale, analyse réelle et complexe, topologie, probabilités, statistiques)."
      : "Rigorous academic curriculum pairing foundational pure & applied mathematics (abstract algebra, real & complex analysis, topology, probability theory, statistcs).",
    coursework: lang === 'fr' ? [
      "Algèbre Linéaire Avancée, Espaces Vectoriels & Décompositions",
      "Analyse Numérique, Calcul Matriciel & Analyse d'Erreurs",
      "Analyse Réelle, Calcul Différentiel et Intégral, Topologie",
      "Probabilités, Statistique Mathématique & Processus Stochastiques",
      "Optimisation Mathématique & Recherche Opérationnelle",
      "Algorithmique & Structures de Données en C/C++"
    ] : [
      "Advanced Linear Algebra, Vector Spaces & Matrix Decompositions",
      "Numerical Analysis, Matrix Computations & Error Estimation",
      "Real Analysis, Differential & Integral Calculus, Topology",
      "Probability Theory, Mathematical Statistics & Stochastic Processes",
      "Mathematical Optimization & Operations Research",
      "Algorithms & Advanced Data Structures in C/C++"
    ],
    isCurrent: true
  }
];
