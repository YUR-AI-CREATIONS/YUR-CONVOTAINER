import { VerticalConfig } from '../vertical.config';

const yurConvotainer: VerticalConfig = {
  id: 'yur-convotainer',
  name: 'YUR-CONVOTAINER',
  tagline: 'Containerized Conversations — Isolated, Persistent, Composable',
  icon: '📦',
  primaryColor: '#2E7D32',
  accentColor: '#1A1A2E',
  bgGradient: 'linear-gradient(135deg, #0D1117 0%, #2E7D32 50%, #1A1A2E 100%)',
  systemInstruction: `You are YUR-CONVOTAINER, the conversation container orchestrator. You manage isolated conversation contexts as first-class runtime objects — each with its own memory, permissions, model assignment, and lifecycle. You enable multi-tenant conversation management, context switching without bleed, session persistence across reconnections, and composable conversation pipelines where output from one container feeds into another.`,
  complianceStandards: [
    'SOC 2 Type II (Confidentiality & Privacy)',
    'GDPR (Right to Erasure / Data Isolation)',
    'CCPA (Data Minimization)',
    'ISO 27001 Annex A.8 (Access Control)',
    'NIST SP 800-53 (Access Control Family)'
  ],
  agents: [
    {
      name: 'CONTEXT_MANAGER',
      role: 'Conversation Isolation & State Management',
      systemPrompt: 'You manage conversation container state — creating isolated contexts with dedicated memory spaces, enforcing data boundaries between containers, handling serialization/deserialization for persistence, and managing container lifecycle from creation through archival.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'SESSION_ARCHITECT',
      role: 'Multi-Session Topology Designer',
      systemPrompt: 'You design conversation topologies — linear threads, branching discussions, parallel investigation tracks, and merge points. You manage parent-child container relationships, implement fork-and-merge patterns, and ensure context inheritance follows explicit permission rules.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'MEMORY_CURATOR',
      role: 'Persistent Memory & Retrieval Optimization',
      systemPrompt: 'You curate conversation memory — deciding what to persist, what to summarize, and what to forget. You implement tiered memory (hot/warm/cold), manage embedding indexes for semantic retrieval, and ensure that relevant context surfaces when a container is reactivated after dormancy.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'FLOW_OPTIMIZER',
      role: 'Conversation Pipeline & Routing',
      systemPrompt: 'You optimize conversation flow — routing messages to the right container based on topic detection, managing queue depth across active containers, implementing priority lanes for urgent conversations, and composing multi-step pipelines where one container\'s output feeds another\'s input.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Container State Store',
      type: 'database',
      description: 'Serialized conversation container states — memory snapshots, model assignments, permission sets'
    },
    {
      name: 'Memory Vector Index',
      type: 'database',
      description: 'Embedding vectors for semantic memory retrieval across all conversation containers'
    },
    {
      name: 'Session Event Stream',
      type: 'realtime',
      description: 'Real-time event stream of container lifecycle events — create, fork, merge, archive, destroy'
    }
  ],
  outputFormats: [
    'Container State Snapshots',
    'Conversation Topology Maps',
    'Memory Retrieval Reports',
    'Session Analytics Dashboards',
    'Flow Pipeline Diagrams',
    'Container Lifecycle Audit Logs',
    'Context Inheritance Trees'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default yurConvotainer;
