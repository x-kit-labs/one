type T_I18N_LNG = 'en-US' | 'zh-CN';
type T_I18N_Item =
  | 'o-ok'
  | 'o-cancel'
  | 'o-copy-warning'
  | 'o-copy-success'
  | 'o-copy-error'
  | 'o-preview'
  | 'o-review'
  | 'o-button-generate'
  | 'o-button-copy'
  | 'o-button-reset'
  | 'o-required'
  | 'o-auth-enter'
  | 'o-auth-logout'
  | 'o-shell-home'
  | 'o-shell-station'
  | 'o-shell-note'
  | 'o-shell-code'
  | 'o-shell-work'
  | 'o-station-paste-now'
  | 'o-station-content-in-clipboard-is-not-text'
  | 'o-note-no-data'
  | 'o-note-hotkey-tip-key'
  | 'o-note-hotkey-tip-desc'
  | 'o-note-hotkey-add'
  | 'o-note-hotkey-save'
  | 'o-note-hotkey-edit'
  | 'o-note-hotkey-delete'
  | 'o-note-delete-confirm-title'
  | 'o-note-delete-confirm-content'
  | 'o-code-encode-divider-label'
  | 'o-code-encode-text-label'
  | 'o-code-encode-button'
  | 'o-code-decode-divider-label'
  | 'o-code-decode-base64url-label'
  | 'o-code-decode-button'
  | 'o-work-biz-type'
  | 'o-work-biz-id'
  | 'o-work-biz-attach-params'
  | 'o-end';

export const i18n: Record<T_I18N_LNG, Record<T_I18N_Item, string>> = {
  'en-US': {
    'o-ok': 'OK',
    'o-cancel': 'Cancel',
    'o-copy-warning': 'The copied content is empty!',
    'o-copy-success': 'Copied!',
    'o-copy-error': 'Copy error!',
    'o-preview': 'Preview',
    'o-review': 'Review',
    'o-button-generate': 'Generate',
    'o-button-copy': 'Copy',
    'o-button-reset': 'Reset',
    'o-required': 'Required',
    //
    'o-auth-enter': 'Enter',
    'o-auth-logout': 'Log out',
    //
    'o-shell-home': 'Home',
    'o-shell-station': 'Station',
    'o-shell-note': 'Note',
    'o-shell-code': 'En/Decode',
    'o-shell-work': 'Work',
    //
    'o-station-paste-now': 'Paste now pls',
    'o-station-content-in-clipboard-is-not-text': 'The content in clipboard is not text, pls check!',
    //
    'o-note-no-data': 'No note',
    'o-note-hotkey-tip-key': 'HotKey',
    'o-note-hotkey-tip-desc': 'Intro',
    'o-note-hotkey-add': 'Create note',
    'o-note-hotkey-save': 'Save note',
    'o-note-hotkey-edit': 'Edit note[Select before operation]',
    'o-note-hotkey-delete': 'Delete note[Select before operation]',
    'o-note-delete-confirm-title': 'Tip',
    'o-note-delete-confirm-content': 'Are you sure you want to delete this record?',
    //
    'o-code-encode-divider-label': 'Encode',
    'o-code-encode-text-label': 'Text',
    'o-code-encode-button': 'Encode to Base64URL',
    'o-code-decode-divider-label': 'Decode',
    'o-code-decode-base64url-label': 'Base64URL',
    'o-code-decode-button': 'Decode from Base64URL',
    'o-work-biz-type': 'Type',
    'o-work-biz-id': 'BizID',
    'o-work-biz-attach-params': 'Extra Params',
    'o-end': '',
  },
  'zh-CN': {
    'o-ok': '确认',
    'o-cancel': '取消',
    'o-copy-warning': '复制内容为空！',
    'o-copy-success': '复制成功',
    'o-copy-error': '复制失败',
    'o-preview': '预览',
    'o-review': '检查',
    'o-button-generate': '生成',
    'o-button-copy': '复制',
    'o-button-reset': '重置',
    'o-required': '必填',
    //
    'o-auth-enter': '进入',
    'o-auth-logout': '退出',
    //
    'o-shell-home': '首页',
    'o-shell-station': '驿站',
    'o-shell-note': '笔记',
    'o-shell-code': '编解码',
    'o-shell-work': '工作',
    //
    'o-station-paste-now': '现在请粘贴',
    'o-station-content-in-clipboard-is-not-text': '剪贴板内容不是文字，请检查～',
    //
    'o-note-no-data': '无数据',
    'o-note-hotkey-tip-key': '快捷键',
    'o-note-hotkey-tip-desc': '说明',
    'o-note-hotkey-add': '新建笔记',
    'o-note-hotkey-save': '保存笔记',
    'o-note-hotkey-edit': '编辑笔记【需要先选中】',
    'o-note-hotkey-delete': '删除笔记【需要先选中】',
    'o-note-delete-confirm-title': '提示',
    'o-note-delete-confirm-content': '你确定要删除这条记录吗?',
    //
    'o-code-encode-divider-label': '编码',
    'o-code-encode-text-label': '文本',
    'o-code-encode-button': '编码成 Base64URL',
    'o-code-decode-divider-label': '解码',
    'o-code-decode-base64url-label': 'Base64URL',
    'o-code-decode-button': '从 Base64URL 解码',
    'o-work-biz-type': '类型',
    'o-work-biz-id': '业务ID',
    'o-work-biz-attach-params': '附加参数串',
    'o-end': '',
  },
};

export const localeList = Object.keys(i18n).map((k) => k);
