import { LS_NOTES_K } from '@/constants';
import * as LocalStorage from '@realign-zone/local-storage';

export const getLocalNotes = () => {
  const data = LocalStorage.get(LS_NOTES_K)?.value;
  return data?.length ? JSON.parse(JSON.stringify(data)) : null;
};

export const addLocalNote = ({
  //
  content,
}: {
  content: string;
}) => {
  const historyListCopy = getLocalNotes() || [];
  LocalStorage.set(
    LS_NOTES_K,
    [
      {
        updateTimeTS: Date.now(),
        content,
        status: 0,
      },
      ...historyListCopy,
    ],
    { cover: true },
  );
};

export const updateLocalNote = ({
  //
  idx,
  content,
}: {
  idx: number;
  content: string;
}) => {
  const historyListCopy = getLocalNotes() || [];
  const len = historyListCopy.length;
  if (len && idx < len) {
    const newNote = {
      ...historyListCopy[idx],
      content,
    };
    historyListCopy.splice(idx, 1, newNote);
    LocalStorage.set(
      //
      LS_NOTES_K,
      [...historyListCopy],
      { cover: true },
    );
  }
};

export const deleteLocalNote = ({
  //
  idx,
}: {
  idx: number;
}) => {
  const historyListCopy = getLocalNotes() || [];
  const len = historyListCopy.length;
  if (len && idx < len) {
    historyListCopy.splice(idx, 1);

    LocalStorage.set(
      //
      LS_NOTES_K,
      [...historyListCopy],
      { cover: true },
    );
  }
};
