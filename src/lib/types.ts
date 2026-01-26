/**
 * Shared TypeScript Types
 * 
 * Centralized type definitions for the portfolio site
 */

/** Project card data structure */
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    cta: string;
    role?: string;
    year?: string;
    tools?: string[];
}

/** Work experience entry */
export interface Experience {
    company: string;
    role: string;
    description: string;
    period: string;
}

/** Process/methodology step */
export interface ProcessStep {
    id: string;
    title: string;
    description: string;
    tags: string[];
}

/** Skill item */
export interface Skill {
    name: string;
    category?: string;
}

/** Custom cursor view state event */
export interface CursorViewStateEvent extends CustomEvent {
    detail: { active: boolean };
}

/** Navigation item */
export interface NavItem {
    name: string;
    href: string;
}
