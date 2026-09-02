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
          ? "Espaces vectoriels, décompositions matricielles (LU, Cholesky, QR, SVD), valeurs & vecteurs propres, conditionnement."
          : "Vector spaces, matrix factorizations (LU, Cholesky, QR, SVD), eigenvalues & eigenvectors, conditioning.",
        tags: ["Matrices", "LU / Cholesky", "Spectral Theory", "SVD"]
      },
      {
        name: lang === 'fr' ? "Analyse numérique & Convergence" : "Numerical Analysis & Convergence",
        subtext: lang === 'fr'
          ? "Méthodes itératives (Jacobi, Gauss-Seidel), discrétisation, analyse d'erreur résiduelle, stabilité numérique."
          : "Iterative methods (Jacobi, Gauss-Seidel), discretization, residual error analysis, numerical stability.",
        tags: ["Residual Error", "Stability", "Interpolation"]
      },
      {
        name: lang === 'fr' ? "Optimisation mathématique" : "Mathematical Optimization",
        subtext: lang === 'fr'
          ? "Optimisation sous contraintes (Lagrange, KKT), descente de gradient, programmation linéaire et convexe."
          : "Constrained optimization (Lagrange, KKT), gradient descent, linear and convex programming.",
        tags: ["Gradient", "Convexity", "Duality", "KKT"]
      },
      {
        name: lang === 'fr' ? "Probabilités & Statistique" : "Probability & Statistics",
        subtext: lang === 'fr'
          ? "Lois de probabilité usuelles, inférence statistique, chaînes de Markov et modélisation stochastique."
          : "Standard distributions, statistical inference, Markov chains, and stochastic modeling.",
        tags: ["Inference", "Markov Chains", "Sampling"]
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
        name: "Linux (GNU/POSIX)",
        subtext: lang === 'fr'
          ? "Commandes Shell / Bash, automatisation par scripts, compilation GCC/Clang, gestionnaire de paquets."
          : "Shell / Bash scripting, GCC/Clang compilation toolchain, POSIX utilities, system administration.",
        tags: ["Bash", "POSIX", "GCC / GDB", "Automation"]
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
      filename: "solver_lu.py",
      code: `import numpy as np

def lu_decomposition(A):
    """
    Décomposition LU d'une matrice carrée A.
    """
    n = A.shape[0]
    L = np.eye(n)
    U = A.copy().astype(float)
    
    for k in range(n - 1):
        for i in range(k + 1, n):
            if U[k, k] == 0:
                continue
            factor = U[i, k] / U[k, k]
            L[i, k] = factor
            U[i, k:] -= factor * U[k, k:]
            
    return L, U`
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
    technologies: ["Python", "C++", "Analyse Numérique"],
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
      language: "cpp",
      filename: "newton.cpp",
      code: `#include <iostream>
#include <cmath>
#include <functional>

double newton_raphson(
    const std::function<double(double)>& f,
    const std::function<double(double)>& df,
    double x0,
    double tol = 1e-7,
    int max_iter = 100
) {
    double x = x0;
    for (int i = 0; i < max_iter; ++i) {
        double fx = f(x);
        double dfx = df(x);
        if (std::abs(dfx) < 1e-12) break;
        
        double x_next = x - (fx / dfx);
        if (std::abs(x_next - x) < tol) {
            return x_next;
        }
        x = x_next;
    }
    return x;
}`
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
      ? "Implémentation d'une structure de polynômes en C++ et Python pour gérer les opérations de base : addition, multiplication, calcul de la dérivée et évaluation efficace par la méthode de Horner."
      : "C++ and Python code for polynomial operations: addition, multiplication, formal differentiation, and Horner evaluation.",
    mathTopic: lang === 'fr' ? "Algèbre & Calcul" : "Algebra & Polynomials",
    technologies: ["C++", "Python", "Algorithmique"],
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
      language: "python",
      filename: "crible.py",
      code: `def crible_eratosthene(n):
    """
    Renvoie la liste des nombres premiers <= n.
    """
    est_premier = [True] * (n + 1)
    est_premier[0] = est_premier[1] = False
    
    for i in range(2, int(n**0.5) + 1):
        if est_premier[i]:
            for multiple in range(i * i, n + 1, i):
                est_premier[multiple] = False
                
    return [p for p in range(2, n + 1) if est_premier[p]]`
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
      ? "Formation universitaire d'excellence combinant les mathématiques fondamentales (algèbre générale, analyse réelle et complexe, topologie, probabilités) et l'informatique fondamentale (algorithmique avancée, programmation système C/C++, architecture des ordinateurs, systèmes d'exploitation)."
      : "Rigorous academic curriculum pairing foundational pure & applied mathematics (abstract algebra, real & complex analysis, topology, probability theory) with core computer science (advanced algorithms, C/C++ systems programming, computer architecture, Linux operating systems).",
    coursework: lang === 'fr' ? [
      "Algèbre Linéaire Avancée, Espaces Vectoriels & Décompositions",
      "Analyse Numérique, Calcul Matriciel & Analyse d'Erreurs",
      "Analyse Réelle, Calcul Différentiel et Intégral, Topologie",
      "Probabilités, Statistique Mathématique & Processus Stochastiques",
      "Optimisation Mathématique & Recherche Opérationnelle",
      "Algorithmique & Structures de Données en C/C++ et Python",
      "Systèmes d'Exploitation Linux, Réseaux & Programmation Système",
      "Rédaction Scientifique, LaTeX et Méthodes de Recherche"
    ] : [
      "Advanced Linear Algebra, Vector Spaces & Matrix Decompositions",
      "Numerical Analysis, Matrix Computations & Error Estimation",
      "Real Analysis, Differential & Integral Calculus, Topology",
      "Probability Theory, Mathematical Statistics & Stochastic Processes",
      "Mathematical Optimization & Operations Research",
      "Algorithms & Advanced Data Structures in C/C++ and Python",
      "Linux Operating Systems, System Programming & Architecture",
      "Scientific Typesetting, LaTeX Monograph Writing & Proof Methods"
    ],
    isCurrent: true
  }
];
