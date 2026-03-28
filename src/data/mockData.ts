export interface ConceptNode {
  id: string;
  name: string;
  subject: string;
  status: 'mastered' | 'weak' | 'missing';
  accuracy: number;
  prerequisites: string[];
}

export interface LearningStep {
  step: number;
  concept: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  concept: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const concepts: ConceptNode[] = [
  { id: '1', name: 'Algebra', subject: 'Mathematics', status: 'weak', accuracy: 45, prerequisites: ['3', '4'] },
  { id: '2', name: 'Geometry', subject: 'Mathematics', status: 'mastered', accuracy: 88, prerequisites: ['5'] },
  { id: '3', name: 'Fractions', subject: 'Mathematics', status: 'weak', accuracy: 52, prerequisites: ['4'] },
  { id: '4', name: 'Division', subject: 'Mathematics', status: 'missing', accuracy: 30, prerequisites: ['5'] },
  { id: '5', name: 'Multiplication', subject: 'Mathematics', status: 'mastered', accuracy: 92, prerequisites: [] },
  { id: '6', name: 'Quadratic Equations', subject: 'Mathematics', status: 'weak', accuracy: 38, prerequisites: ['1'] },
  { id: '7', name: 'Trigonometry', subject: 'Mathematics', status: 'missing', accuracy: 22, prerequisites: ['2', '1'] },
  { id: '8', name: 'Calculus', subject: 'Mathematics', status: 'missing', accuracy: 15, prerequisites: ['6', '7'] },
];

export const graphLinks = [
  { source: '5', target: '4' },
  { source: '5', target: '2' },
  { source: '4', target: '3' },
  { source: '3', target: '1' },
  { source: '4', target: '1' },
  { source: '1', target: '6' },
  { source: '2', target: '7' },
  { source: '1', target: '7' },
  { source: '6', target: '8' },
  { source: '7', target: '8' },
];

export const learningPath: LearningStep[] = [
  { step: 1, concept: 'Division', status: 'current', description: 'Master basic division operations and long division' },
  { step: 2, concept: 'Fractions', status: 'upcoming', description: 'Understand fraction operations: add, subtract, multiply, divide' },
  { step: 3, concept: 'Algebra', status: 'upcoming', description: 'Build algebraic thinking and equation solving' },
  { step: 4, concept: 'Quadratic Equations', status: 'upcoming', description: 'Solve quadratic equations using multiple methods' },
  { step: 5, concept: 'Trigonometry', status: 'upcoming', description: 'Learn trigonometric ratios and identities' },
  { step: 6, concept: 'Calculus', status: 'upcoming', description: 'Introduction to limits and derivatives' },
];

export const testQuestions: TestQuestion[] = [
  {
    id: '1',
    question: 'What is 144 ÷ 12?',
    options: ['10', '12', '14', '16'],
    correctAnswer: 1,
    concept: 'Division',
    difficulty: 'easy',
  },
  {
    id: '2',
    question: 'Simplify: 3/4 + 1/6',
    options: ['4/10', '11/12', '5/6', '7/12'],
    correctAnswer: 1,
    concept: 'Fractions',
    difficulty: 'medium',
  },
  {
    id: '3',
    question: 'Solve for x: 2x + 5 = 15',
    options: ['x = 4', 'x = 5', 'x = 10', 'x = 7.5'],
    correctAnswer: 1,
    concept: 'Algebra',
    difficulty: 'easy',
  },
  {
    id: '4',
    question: 'What is 3/5 × 2/3?',
    options: ['6/15', '2/5', '5/8', '1/5'],
    correctAnswer: 1,
    concept: 'Fractions',
    difficulty: 'easy',
  },
  {
    id: '5',
    question: 'Solve: x² - 5x + 6 = 0',
    options: ['x = 1, 6', 'x = 2, 3', 'x = -2, -3', 'x = 3, 4'],
    correctAnswer: 1,
    concept: 'Quadratic Equations',
    difficulty: 'hard',
  },
];

export const performanceData = [
  { week: 'W1', accuracy: 35, concepts: 2 },
  { week: 'W2', accuracy: 42, concepts: 3 },
  { week: 'W3', accuracy: 48, concepts: 3 },
  { week: 'W4', accuracy: 55, concepts: 4 },
  { week: 'W5', accuracy: 60, concepts: 5 },
  { week: 'W6', accuracy: 65, concepts: 5 },
];
