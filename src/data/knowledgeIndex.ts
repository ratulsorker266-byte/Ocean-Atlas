import { artsStore } from './artsStore';
import { appliedStore } from './appliedStore';
import { commerceStore } from './commerceStore';
import { scienceStore } from './scienceStore';
import { AgeLevel, KnowledgeStore, QuestionEntry, StoreId, Subject, TopicChapter } from '../types/knowledge';

export const ALL_STORES: KnowledgeStore[] = [
  scienceStore,
  artsStore,
  commerceStore,
  appliedStore,
];

export const AGE_LEVEL_META: Record<
  AgeLevel,
  {
    label: string;
    ageRange: string;
    description: string;
  }
> = {
  explorer: {
    label: 'Young Explorer',
    ageRange: 'Ages 6–12',
    description: 'Clear everyday analogies, friendly stories, and core curiosity.',
  },
  student: {
    label: 'School & College',
    ageRange: 'Ages 13–18',
    description: 'Structured concepts, formulas, step-by-step reasoning, and exam depth.',
  },
  mastery: {
    label: 'Deep Mastery',
    ageRange: 'Ages 18+ & Lifelong',
    description: 'University principles, formal frameworks, and cross-disciplinary rigor.',
  },
};

export function getStoreById(storeId: StoreId): KnowledgeStore {
  return ALL_STORES.find((store) => store.id === storeId) ?? scienceStore;
}

export function getAllSubjects(): Subject[] {
  return ALL_STORES.flatMap((store) => store.subjects);
}

export function getSubjectById(subjectId: string): Subject | undefined {
  return getAllSubjects().find((subject) => subject.id === subjectId);
}

export function getAllTopics(): Array<{
  store: KnowledgeStore;
  subject: Subject;
  topic: TopicChapter;
}> {
  const results: Array<{ store: KnowledgeStore; subject: Subject; topic: TopicChapter }> = [];
  for (const store of ALL_STORES) {
    for (const subject of store.subjects) {
      for (const topic of subject.topics) {
        results.push({ store, subject, topic });
      }
    }
  }
  return results;
}

export function getAllQuestions(): Array<{
  store: KnowledgeStore;
  subject: Subject;
  question: QuestionEntry;
}> {
  const results: Array<{ store: KnowledgeStore; subject: Subject; question: QuestionEntry }> = [];
  for (const store of ALL_STORES) {
    for (const subject of store.subjects) {
      for (const question of subject.questions) {
        results.push({ store, subject, question });
      }
    }
  }
  return results;
}

export function getAtlasStats() {
  const storesCount = ALL_STORES.length;
  const subjectsCount = getAllSubjects().length;
  const topicsCount = getAllTopics().length;
  const questionsCount = getAllQuestions().length;
  return {
    storesCount,
    subjectsCount,
    topicsCount,
    questionsCount,
  };
}
