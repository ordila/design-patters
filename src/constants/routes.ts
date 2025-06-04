// utils
import { fromConstantToLabel } from "@/utils/string";

export const PATTERN_TYPES = {
  CREATIONAL_PATTERNS: "creational",
  STRUCTURAL_PATTERNS: "structural",
} as const;

export const ROUTES = {
  // Creational Patterns

  FACTORY_METHOD: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/factory-method`,
  ABSTRACT_FACTORY: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/abstract-factory`,
  BUILDER: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/builder`,
  PROTOTYPE: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/prototype`,
  SINGLETON: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/singleton`,

  // Structural Patterns
  ADAPTER: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/adapter`,
};

type TRoute = keyof typeof ROUTES;

export const ROUTES_WITHOUT_SLASH = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => [key, value.slice(1)])
) as Record<TRoute, string>;

export const ROUTES_WITH_LABELS = Object.entries(PATTERN_TYPES).map(
  ([key, value]) => {
    const patterns = Object.entries(ROUTES)
      .filter(([_, route]) => route.includes(value))
      .map(([type, href]) => ({
        href,
        title: fromConstantToLabel(type),
      }));

    return {
      type: key,
      label: fromConstantToLabel(key),
      patterns: patterns,
    };
  }
);
