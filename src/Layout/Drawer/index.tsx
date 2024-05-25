import React, { useState } from 'react';
import * as Next from '@alifd/next';

import rc from '@/routes';

import './index.scss';

export default function DrawerLayout({ children }) {
  const Menu = rc[0].children.reduce((prev, item) => {
    const { menu, path, label } = item;
    if (menu) {
      prev.push({
        path,
        label,
      });
    }
    return prev;
  }, []);

  const [drawerVisible, setDrawerVisible] = useState(false);
  const openDrawerEvt = () => {
    setDrawerVisible(true);
  };
  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };
  return (
    <div className="m-drawer-layout-container">
      {location.pathname !== '/player' && (
        <div className="m-drawer-layout-handler">
          <Next.Button
            //
            size="large"
            style={{
              borderRadius: '50%',
              opacity: '.4',
            }}
            onClick={openDrawerEvt}
          >
            <Next.Icon type="add" />
          </Next.Button>
          <Next.Drawer title="快捷" placement="left" visible={drawerVisible} onClose={onCloseDrawer}>
            <ul>
              {Menu.map((x, idx) => {
                return (
                  <li key={x.path}>
                    <a href={x.path} target="_blank" rel="noreferrer">
                      {idx}. {x.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Next.Drawer>
        </div>
      )}
      {children}
    </div>
  );
}
