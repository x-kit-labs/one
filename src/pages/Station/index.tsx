import React, { CSSProperties } from 'react';
import * as Next from '@alifd/next';
import ClipboardPaste from 'clipboard-paste';

import { queryMimetype, queryText, uploadFile } from '@/api';
import { createFile, upload, copy } from '@/utils';

import './index.scss';

const idPaste = 'j-s-paste';
const mediaStyle: CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
};

const Station = () => {
  const [pasteFocus, setPasteFocus] = React.useState(false);
  const [txtX, setTxtX] = React.useState('');
  const [imgX, setImgX] = React.useState('');
  const [videoX, setVideoX] = React.useState('');

  const [opened, setOpened] = React.useState(false);
  const [pushInputVal, setPushInputVal] = React.useState('');

  const getLatestEvt = async () => {
    const res = await queryMimetype();
    const t = res?.data?.mimetype || '';
    const cdnFilePath = res?.data?.cdnFilePath || '';
    if (!t) {
      return;
    }
    // reset state
    setTxtX('');
    setImgX('');
    setVideoX('');

    if (t.startsWith('text')) {
      const txt = await queryText();
      setTxtX(txt);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (cdnFilePath) {
        if (t.startsWith('image')) {
          setImgX(cdnFilePath);
        } else if (t.startsWith('video')) {
          setVideoX(cdnFilePath);
        }
      } else {
        //
      }
    }
  };

  const copyLatestEvt = () => {
    copy(txtX, true);
  };

  const confirmEvt = async (val) => {
    if (val.trim()) {
      const file = await createFile(val);
      await uploadFile(file);
    }

    setOpened(false);
  };
  const closeEvt = () => {
    setPushInputVal('');
    setOpened(false);
  };

  React.useEffect(() => {
    getLatestEvt();

    const blurInputEnabledField = () => {
      (document.querySelector(`#${idPaste}`) as HTMLElement)?.blur?.();
    };
    function cbPasteEvt(e, all) {
      if (all && all[0]) {
        const { content, kind, type } = all[0];
        if (type.startsWith('text/') && kind === 'string') {
          confirmEvt(content);
        } else {
          Next.Message.notice('剪贴板内容不是文字，请检查～');
        }
      }
      blurInputEnabledField();
    }

    ClipboardPaste.addEvtPaste(`#${idPaste}`, cbPasteEvt);
  }, []);

  return (
    <>
      <div className="m-station-container">
        <div className="m-row-item m-row-item-1">
          <div className="m-pu__-field">
            <div className="m-pu__-field-push-inner">
              {/* PC: paste */}
              <div className="m-push-paste">
                <div
                  //
                  className="u-paste-icon-container"
                  id={idPaste}
                  tabIndex={-1}
                  onFocus={() => {
                    setPasteFocus(true);
                  }}
                  onBlur={() => {
                    setPasteFocus(false);
                  }}
                >
                  <Next.Icon type="copy" size="xxxl" />
                  {pasteFocus && <div style={{ position: 'absolute', bottom: '0' }}>请粘贴</div>}
                </div>
              </div>
              {/* Mobile: input */}
              <div className="m-push-input">
                <div
                  //
                  className="u-input-icon-container"
                  onClick={() => {
                    setOpened(true);
                  }}
                >
                  <Next.Icon type="edit" size="xxxl" />
                </div>
              </div>
              <Next.Divider className="u-divider-icon" direction="ver" />
              <div className="m-push-upload-file">
                <Next.Upload
                  //
                  limit={1}
                  request={upload}
                  onSuccess={
                    (/* res, file */) => {
                      // const { response } = res;
                      // response?.x?.size
                      // response?.xx?.data?.size
                    }
                  }
                >
                  <div className="u-upload-icon-container">
                    <Next.Icon type="upload" size="xxxl" />
                  </div>
                </Next.Upload>
              </div>
            </div>
          </div>
        </div>
        <div className="m-row-item m-row-item-2">
          <div className="m-pu__-field">
            <div className="m-pu__-field-pull-inner">
              <div className="m-pull-result">
                {txtX && (
                  <pre
                    style={{
                      margin: '2vw',
                      fontSize: '14px',
                      lineHeight: '1.4',
                      overflow: 'auto',
                    }}
                  >
                    {txtX}
                  </pre>
                )}
                {imgX && <img style={mediaStyle} src={imgX} />}
                {videoX && <video style={mediaStyle} controls src={videoX} />}
              </div>
              <div className="m-pull-control">
                <div className="u-biz-btn" onClick={getLatestEvt}>
                  <Next.Icon type="refresh" />
                </div>
                <div className="u-biz-btn" onClick={copyLatestEvt}>
                  <Next.Icon type="copy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Next.Dialog
        //
        v2
        title="输入内容"
        visible={opened}
        onOk={() => {
          confirmEvt(pushInputVal);
          setPushInputVal('');
        }}
        onClose={closeEvt}
      >
        <Next.Input.TextArea
          //
          style={{ width: '100%' }}
          rows={14}
          autoFocus
          onChange={(v) => {
            setPushInputVal(v);
          }}
        />
      </Next.Dialog>
    </>
  );
};

export default Station;
