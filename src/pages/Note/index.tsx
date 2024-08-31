import * as React from 'react';
import * as Next from '@alifd/next';
import * as ReactIntl from 'react-intl';
import * as hotkeys from 'hotkeys-js';
import MarkdownToJSX from 'markdown-to-jsx';
import 'wc-waterfall';

// import { queryAllNotes } from '@/api';
import {
  //
  getLocalNotes,
  addLocalNote,
  updateLocalNote,
  deleteLocalNote,
} from '@/storage';
import { useScreenType } from '@/hooks';
import NoteCard from '@/components/NoteCard';

import {
  //
  handleText,
  waterfallPropsMap,
  HotKeysRegisterIntroMap,
  getHotKeysTableData,
} from './helper';
import { BalloonHotkeys } from './unit';

import './index.scss';

const HotKeys = hotkeys.default;

const Note = ({ intl }: { intl: any }) => {
  const { type } = useScreenType();

  const noteListRef = React.useRef<any[]>([]);
  const newNoteValRef = React.useRef<string>('');
  const selectedIdxRef = React.useRef<number>(-1);
  const editingIdxRef = React.useRef<number>(-1);

  const [refreshCount, setRefreshCount] = React.useState<number>(0);
  const [dialogOpened, setDialogOpened] = React.useState<boolean>(false);

  const onTextAreaChangeEvt = (value: string) => {
    newNoteValRef.current = value;
  };

  const getNoteList = async () => {
    // const res = await queryAllNotes();
    // console.log('note list: ', res);
    // noteListRef.current = (res?.list || []).map((item) => item?.content);
    const list = getLocalNotes();
    noteListRef.current = (list || []).map((item) => item?.content);
    setRefreshCount((pre) => pre + 1);
  };

  React.useEffect(() => {
    getNoteList();
  }, []);

  React.useEffect(() => {
    HotKeys(HotKeysRegisterIntroMap.add.key, function (event) {
      event.preventDefault();

      if (!dialogOpened) {
        setDialogOpened(true);
      }
    });

    HotKeys(HotKeysRegisterIntroMap.save.key, function (event) {
      event.preventDefault();

      if (editingIdxRef.current === -1) {
        // 新建
        if ((newNoteValRef.current || '').trim()) {
          addLocalNote({
            content: newNoteValRef.current,
          });
          getNoteList();
        }
      } else {
        // 编辑
        updateLocalNote({
          idx: editingIdxRef.current,
          content: newNoteValRef.current,
        });
        editingIdxRef.current = -1;
        getNoteList();
      }
      setDialogOpened(false);
    });

    HotKeys(HotKeysRegisterIntroMap.edit.key, function (event) {
      event.preventDefault();

      if (selectedIdxRef.current !== -1) {
        editingIdxRef.current = selectedIdxRef.current;
        if (!dialogOpened) {
          setDialogOpened(true);
        }
      }
    });

    HotKeys(HotKeysRegisterIntroMap.delete.key, function (event) {
      event.preventDefault();

      if (selectedIdxRef.current !== -1) {
        const needDeleteIdx = selectedIdxRef.current;
        // deleteLocalNote
        Next.Dialog.show({
          v2: true,
          closeMode: [],
          title: intl.formatMessage({ id: 'o-note-delete-confirm-title' }),
          content: intl.formatMessage({ id: 'o-note-delete-confirm-content' }),
          onOk: () => {
            deleteLocalNote({ idx: needDeleteIdx });
            getNoteList();
          },
        });
      }
    });
  }, []);

  // React.useEffect(() => {

  // }, []);

  return (
    <>
      <div className="m-note-container">
        <div className="m-note-hotkeys_balloon">
          <BalloonHotkeys data={getHotKeysTableData()} />
        </div>
        <div className="m-note-inner">
          {React.useMemo(() => {
            return (
              <>
                {noteListRef.current.length > 0 ? (
                  // @ts-ignore
                  <wc-waterfall gap={waterfallPropsMap[type].gap} cols={waterfallPropsMap[type].cols}>
                    {noteListRef.current.map((dlItem, dlIdx) => {
                      return (
                        <div key={dlItem} style={{ width: '100%' }}>
                          <NoteCard
                            //
                            onFocus={() => {
                              selectedIdxRef.current = dlIdx;
                            }}
                            onBlur={() => {
                              selectedIdxRef.current = -1;
                            }}
                          >
                            <MarkdownToJSX
                              options={{
                                forceBlock: true,
                                wrapper: 'article',
                                forceWrapper: true,
                              }}
                            >
                              {handleText(dlItem)}
                            </MarkdownToJSX>
                          </NoteCard>
                        </div>
                      );
                    })}
                    {/* @ts-ignore */}
                  </wc-waterfall>
                ) : (
                  <div className="m-note-empty">
                    <ReactIntl.FormattedMessage id="o-note-no-data" />
                  </div>
                )}
              </>
            );
          }, [refreshCount, type])}
        </div>
        <div className="m-note-refresh_tip">{refreshCount}</div>
      </div>

      <Next.Dialog
        visible={dialogOpened}
        wrapperClassName="m-note-dialog"
        align="tc tc"
        closeMode={['esc']}
        footerActions={[]}
        onClose={() => {
          newNoteValRef.current = '';
          setDialogOpened(false);
        }}
      >
        <div className="m-note-dialog-sign">#</div>
        <NoteCard randomRotate={false}>
          <Next.Input.TextArea
            //
            autoFocus
            autoHeight
            composition
            className="m-note-dialog-textarea"
            defaultValue={noteListRef.current?.[editingIdxRef.current] || ''}
            onChange={onTextAreaChangeEvt}
          />
        </NoteCard>
      </Next.Dialog>
    </>
  );
};

export default ReactIntl.injectIntl(Note);
