"use client";

import React, { useState, useEffect } from "react";
import { algoliasearch } from "algoliasearch";
import { useInstantSearch } from "react-instantsearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Pagination,
  Stats,
  Highlight,
} from "react-instantsearch";
import { INDEX_NAME } from "@/lib/algolia";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ""
);

const cleanText = (str: string) =>
  str ? str.replace(/[ï¿½\uFFFD]/g, "").trim() : "";

function NoResultsBoundary({ children }: { children: React.ReactNode }) {
  const { results, indexUiState, setIndexUiState } = useInstantSearch();

  if (!results || results.nbHits !== 0) {
    return <>{children}</>;
  }
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        No results found
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
        We couldn't find any hotels matching "{results.query}". Try checking
        your spelling or clearing filters.
      </p>
      <button
        onClick={() =>
          setIndexUiState({ ...indexUiState, query: "", refinementList: {} })
        }
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
      >
        Clear all search & filters
      </button>
    </div>
  );
}

function HotelListItem({ hit }: any) {
  return (
    <div className="group flex items-center gap-4 p-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all cursor-pointer border-b border-gray-50 dark:border-gray-800 last:border-0">
      <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
        <span className="text-xl">🏨</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center gap-2">
          <h4 className="font-extrabold text-gray-800 mb-2 dark:text-white truncate text-xl leading-tight">
            <Highlight attribute="hotel_name" hit={hit} />
            {cleanText(hit.hotel_name)}
          </h4>

          {hit.rating && (
            <span className="text-sm font-black text-yellow-600 shrink-0 bg-yellow-50 px-2 py-0.5 rounded">
              ⭐ {hit.rating}
            </span>
          )}
        </div>

        <p className="text-base text-gray-500 dark:text-gray-400 truncate mt-0.5">
          {cleanText(hit.city_name)}, {cleanText(hit.country_name)}
        </p>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">
        <svg
          className="w-6 h-6 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}

function HotelCard({ hit }: any) {
  return (
    <div className="group bg-white dark:bg-gray-800 flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug line-clamp-2 flex-1">
          <Highlight attribute="hotel_name" hit={hit} />
          {!hit._highlightResult?.hotel_name && cleanText(hit.hotel_name)}
        </h3>
        {hit.rating && (
          <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg shrink-0 border border-yellow-100 dark:border-yellow-800">
            <span className="text-xs font-bold">{hit.rating} ⭐</span>
          </div>
        )}
      </div>

      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {cleanText(hit.city_name)}, {cleanText(hit.country_name)}
      </p>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 line-clamp-2 italic">
        {cleanText(hit.info1)} {hit.info2 && `• ${cleanText(hit.info2)}`}
      </p>

      <div className="flex-grow min-h-[16px]" />

      <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-200 dark:shadow-none transition-all mt-4">
        View Details
      </button>
    </div>
  );
}

export default function SearchPage() {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFocused(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl text-gray-800 font-bold text-center p-6 mt-10">
          Your World, Refined.
        </h1>
        <p className="text-lg text-gray-600 text-center">
          From hidden gems to five-star icons—find the perfect stay with a
          <br />
          search experience as seamless as your next vacation. Filter by rating,
          location, and luxury. 🥂
        </p>{" "}
      </div>
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <div
          className={`fixed inset-0 z-[40] bg-black/40 backdrop-blur-md transition-all duration-300 ${
            isFocused
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsFocused(false)}
        />

        <header
          className={`relative z-[50] transition-all duration-500 mx-auto px-4 ${
            isFocused ? "pt-10 max-w-4xl" : "pt-20 max-w-2xl"
          }`}
        >
          <div className="relative">
            <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center gap-2">
              {isFocused && (
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
                  Powered by
                </span>
              )}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="text-indigo-500"
              >
                <path
                  d="M12 2L2 19.5L12 22L22 19.5L12 2Z"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path d="M12 2L22 19.5L12 22V2Z" fill="currentColor" />
              </svg>
            </div>

            <SearchBox
              onFocus={() => setIsFocused(true)}
              placeholder="Search hotels, cities, or countries..."
              classNames={{
                root: "relative w-full",
                input: `w-full px-6 py-5 rounded-2xl border-0 bg-white dark:bg-gray-900 shadow-2xl ring-2 transition-all ${
                  isFocused
                    ? "ring-indigo-500 text-xl"
                    : "ring-transparent text-lg"
                } outline-none dark:text-white`,
                submit: "hidden",
                reset: "hidden",
              }}
            />

            {isFocused && (
              <div className="absolute top-full left-0 w-full mt-3 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col max-h-[70vh]">
                <NoResultsBoundary>
                  <div className="p-3 border-b border-gray-50 dark:border-gray-800 flex justify-between bg-gray-50/30 dark:bg-gray-800/30">
                    <Stats className="text-xs font-bold text-gray-400 uppercase tracking-widest" />
                  </div>
                  <div className="overflow-y-auto p-2">
                    <Hits
                      hitComponent={HotelListItem}
                      classNames={{ list: "flex flex-col gap-1" }}
                    />
                  </div>
                </NoResultsBoundary>
              </div>
            )}
          </div>
        </header>

        <main
          className={`relative z-30 max-w-8xl mx-22 flex flex-col md:flex-row gap-10 p-8 transition-all duration-500 ${
            isFocused ? "opacity-10 scale-[0.98] blur-sm" : "opacity-100"
          }`}
        >
          <aside className="w-full md:w-64 mt-11 flex flex-col gap-y-8 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm h-fit">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">
                Location
              </h3>
              <RefinementList
                attribute="country_name" 
                limit={6}
                showMore={true}
                searchable={true}
                transformItems={(items) =>
                  items.map((item) => ({
                    ...item,
                    label: item.label.replace(/[ï¿½\uFFFD]/g, "").trim(),
                  }))
                }
                classNames={{
                  root: "space-y-4",
                  list: "space-y-2",
                  label: "flex items-center cursor-pointer group",
                  checkbox:
                    "w-4 h-4 rounded border-gray-300 dark:border-gray-700 text-indigo-600 focus:ring-indigo-500",
                  labelText:
                    "ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-indigo-500 transition-colors",
                  count:
                    "ml-auto text-[10px] font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full",
                  noResults: "text-xs text-gray-400 italic",
                  showMore:
                    "mt-4 text-xs font-bold text-indigo-500 hover:text-indigo-700 uppercase tracking-tighter",
                }}
              />
            </div>

            <hr className="border-gray-100 dark:border-gray-800" />

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">
                Minimum Rating
              </h3>
              <RefinementList
                attribute="rating"
                classNames={{
                  root: "space-y-4",
                  list: "space-y-2",
                  label: "flex items-center cursor-pointer group",
                  checkbox:
                    "w-4 h-4 rounded border-gray-300 dark:border-gray-700 text-indigo-600 focus:ring-indigo-500",
                  labelText:
                    "ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-indigo-500 transition-colors",
                  count:
                    "ml-auto text-[10px] font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full",
                  noResults: "text-xs text-gray-400 italic",
                   }}
              />
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <Stats className="text-sm font-medium text-gray-400" />
            </div>

            <Hits
              hitComponent={HotelCard}
              classNames={{
                list: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
              }}
            />

            <div className="mt-16 flex justify-center">
              <Pagination
                classNames={{
                  list: "flex gap-2",
                  item: "px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 text-sm hover:bg-indigo-50 transition-colors",
                  selectedItem:
                    "border-indigo-600 bg-indigo-50 text-indigo-600 font-bold shadow-sm",
                  disabledItem: "opacity-30 cursor-not-allowed",
                }}
              />
            </div>
          </section>
        </main>
      </InstantSearch>
    </div>
  );
}
