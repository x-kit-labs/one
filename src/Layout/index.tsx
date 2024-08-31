import * as React from 'react';
import * as Next from '@alifd/next';
import { Link } from 'ice';
import * as ReactIntl from 'react-intl';

import { STATIC_LOGO, LOCALE_ACTIVE } from '@/constants';
import { i18n } from '@/i18n';
import { useScreenType } from '@/hooks';
import { CustomIcons } from '@/components/Icons';
import AuthControl from '@/components/AuthControl';
import LocaleSwitcher from '@/components/LocaleSwitcher';

import { getKeyByPath, getMenuData } from './menu';

import './index.scss';

const { ConfigProvider, Nav, Shell, Divider } = Next;

export default function Layout({ children }) {
  const menuData = getMenuData();
  const currentRouteKey = getKeyByPath(location.pathname);

  const { type } = useScreenType();

  const [stateSelectedKey, setStateSelectedKey] = React.useState(currentRouteKey);
  const [navCollapse, setNavCollapse] = React.useState(true);

  return (
    <ConfigProvider
      //
      locale={{
        //
        Dialog: {
          //
          ok: i18n[LOCALE_ACTIVE]['o-ok'],
          cancel: i18n[LOCALE_ACTIVE]['o-cancel'],
        },
      }}
    >
      <Shell className="o-layout-shell-container" device={type} type="brand">
        <Shell.Branding>
          <div className="o-layout-logo">
            <img
              //
              className="o-layout-logo-img"
              src={STATIC_LOGO}
            />
          </div>
        </Shell.Branding>
        <Shell.Action>
          <LocaleSwitcher />
          <Divider direction="ver" />
          <AuthControl />
        </Shell.Action>

        <Shell.Navigation
          collapse={navCollapse}
          onCollapseChange={() => {
            setNavCollapse(!navCollapse);
          }}
        >
          {menuData?.length ? (
            <Nav
              embeddable
              defaultSelectedKeys={currentRouteKey}
              onSelect={(selectedKeys) => {
                setStateSelectedKey(selectedKeys[0]);
              }}
            >
              {menuData.map(({ key, labelI18n, path, icon }) => {
                return (
                  <Nav.Item
                    key={key}
                    icon={
                      <CustomIcons
                        type={icon}
                        style={{
                          color: stateSelectedKey === key ? 'var(--color-brand1-6)' : 'var(--color-text1-4)',
                        }}
                      />
                    }
                  >
                    <Link to={path}>
                      <span
                        style={{
                          //
                          fontSize: '15px',
                          verticalAlign: 'middle',
                          marginLeft: '4px',
                        }}
                      >
                        <ReactIntl.FormattedMessage id={labelI18n} />
                      </span>
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          ) : null}
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
      </Shell>
    </ConfigProvider>
  );
}
