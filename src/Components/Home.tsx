import { useState } from 'react';
import { SearchResult } from '../Models/SearchResult';
import { ImageGallery } from './ImageGallery';
import { useTabState } from './TabState';
import { QueryArea } from './QueryArea';
import { SearchQuery } from '../Services/SearchQuery';
import { AuthenticationDialog } from './AuthenticationDialog';

export function Home() {
  const [result, setResult] = useState<SearchResult[] | null>(null);
  const { tab } = useTabState();

  function search(query: SearchQuery) {
    void query.querySearch(30).then(t => {
      setResult(t.result);
    });
  }

  return (
      <>
        <QueryArea onSubmit={search}></QueryArea>

        {result && (
            <ImageGallery
                searchResult={result}
                currentTab={tab}
                onSimilarSearch={search}
            ></ImageGallery>
        )}
        <AuthenticationDialog/>
      </>
  );
}
