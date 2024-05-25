import React, { useState } from 'react';
import * as Next from '@alifd/next';
import { Link } from 'ice';

import { STATIC_LOGO } from '@/constants';
import { useScreenType } from '@/hooks';
import { CustomIcons } from '@/components/Icons';

import { getKeyByPath, getMenuData } from './menu';

import './index.scss';

const { Nav, Shell } = Next;

export default function Layout({ children }) {
  const menuData = getMenuData();
  const currentRouteKey = getKeyByPath(location.pathname);

  const { type } = useScreenType();

  const [stateSelectedKey, setStateSelectedKey] = useState(currentRouteKey);

  return (
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

      <Shell.Navigation>
        {menuData?.length ? (
          <Nav
            embeddable
            defaultSelectedKeys={currentRouteKey}
            onSelect={(selectedKeys) => {
              setStateSelectedKey(selectedKeys[0]);
            }}
          >
            {menuData.map(({ key, label, path, icon }) => {
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
                      {label}
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
  );
}
