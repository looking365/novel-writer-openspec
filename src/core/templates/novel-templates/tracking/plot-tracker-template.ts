/**
 * 情节追踪模板
 *
 * 用于追踪故事情节的发展、伏笔的埋设和回收
 */

interface Metadata {
    created: string;
    lastUpdated: string;
    version: string;
    description: string;
}

interface PlotEvent {
    chapterId: number;
    event: string;
    impact: string;
}

interface PlotLine {
    id: string;
    name: string;
    type: 'main' | 'subplot' | 'side';
    priority: 'high' | 'medium' | 'low';
    status: 'planning' | 'active' | 'completed' | 'paused';
    startChapter: number | null;
    endChapter: number | null;
    description: string;
    keyEvents: PlotEvent[];
}

interface Foreshadowing {
    id: string;
    type: 'mystery' | 'hint' | 'setup' | 'callback';
    description: string;
    plantedChapter: number;
    hintedChapters: number[];
    revealedChapter: number | null;
    priority: 'high' | 'medium' | 'low';
    status: 'planned' | 'planted' | 'hinted' | 'revealed';
    relatedPlot: string;
    notes: string;
}

interface Conflict {
    id: string;
    type: 'character-vs-character' | 'character-vs-self' | 'character-vs-society' | 'character-vs-nature';
    description: string;
    participants: string[];
    startChapter: number;
    peakChapter: number | null;
    resolvedChapter: number | null;
    resolution: string | null;
    status: 'building' | 'peak' | 'resolved';
}

interface ChapterSummary {
    chapterNumber: number;
    title: string;
    wordCount: number;
    plotLines: string[];
    keyEvents: string[];
    foreshadowingPlanted: string[];
    foreshadowingRevealed: string[];
    conflictsAdvanced: string[];
    newCharacters: string[];
    importantDialogues: string[];
    notes: string;
}

interface Checkpoint {
    chapterNumber: number;
    description: string;
    expectedOutcomes: string[];
    actualOutcomes: string[] | null;
    deviations: string | null;
}

interface PlotTracker {
    metadata: Metadata;
    plotLines: PlotLine[];
    foreshadowing: Foreshadowing[];
    conflicts: Conflict[];
    chapterSummaries: ChapterSummary[];
    checkpoints: Checkpoint[];
}

export const plotTrackerTemplate = (): PlotTracker => ({
    metadata: {
        created: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        version: "1.0",
        description: "故事情节追踪数据"
    },
    plotLines: [
        {
            id: "main-plot",
            name: "[主线名称，如：复仇之路]",
            type: "main",
            priority: "high",
            status: "active",
            startChapter: 1,
            endChapter: null,
            description: "[待补充主线情节简述]",
            keyEvents: [
                {
                    chapterId: 1,
                    event: "[待补充关键事件描述]",
                    impact: "[待补充事件影响]"
                }
            ]
        },
        {
            id: "subplot-1",
            name: "[支线名称]",
            type: "subplot",
            priority: "medium",
            status: "planning",
            startChapter: null,
            endChapter: null,
            description: "[待补充支线情节简述]",
            keyEvents: []
        }
    ],
    foreshadowing: [
        {
            id: "foreshadow-1",
            type: "mystery",
            description: "[待补充伏笔内容描述]",
            plantedChapter: 0,
            hintedChapters: [],
            revealedChapter: null,
            priority: "high",
            status: "planned",
            relatedPlot: "main-plot",
            notes: "[待补充伏笔设计思路]"
        }
    ],
    conflicts: [
        {
            id: "conflict-1",
            type: "character-vs-character",
            description: "[待补充冲突描述]",
            participants: ["[角色1]", "[角色2]"],
            startChapter: 0,
            peakChapter: null,
            resolvedChapter: null,
            resolution: null,
            status: "building"
        }
    ],
    chapterSummaries: [
        {
            chapterNumber: 1,
            title: "[待补充章节标题]",
            wordCount: 0,
            plotLines: ["main-plot"],
            keyEvents: ["[待补充本章关键事件]"],
            foreshadowingPlanted: [],
            foreshadowingRevealed: [],
            conflictsAdvanced: [],
            newCharacters: [],
            importantDialogues: [],
            notes: "[待补充创作笔记]"
        }
    ],
    checkpoints: [
        {
            chapterNumber: 10,
            description: "第一卷结束",
            expectedOutcomes: [
                "[待补充预期达成的目标1]",
                "[待补充预期达成的目标2]"
            ],
            actualOutcomes: null,
            deviations: null
        }
    ]
});

export const getPlotTrackerTemplate = () => plotTrackerTemplate();

// 导出类型供外部使用
export type {
    Metadata,
    PlotEvent,
    PlotLine,
    Foreshadowing,
    Conflict,
    ChapterSummary,
    Checkpoint,
    PlotTracker
};
