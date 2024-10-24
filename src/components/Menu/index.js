import React, { useState } from 'react';
import { motion } from 'framer-motion';

import useMenus from '../../hooks/useMenus';
import MenuTabs from './MenuTabs';
import FullMenu from './FullMenu';
import Spicy from '../Icons/Spicy';
import Star from '../Icons/Star';

const Menu = () => {
  const menus = useMenus();
  const menuSections = menus[0].sections;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section id="menu">
      <div className="w-full h-full pt-6 px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Menu
        </motion.h2>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* DISPLAY MENU TABS */}
          <MenuTabs
            menuSections={menuSections}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
        </motion.div>

        {/* DISPLAY MENU ITEMS ACCORDING TO ACTIVE TAB */}
        <FullMenu
          menuSections={menuSections}
          activeTab={activeTab}
        />

        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center text-sm">
            <div className="mr-2 w-[23px] h-[23px] inline-flex justify-center items-center rounded-full bg-yellow-100 text-orange-400">
              <span className="w-[15px] h-[15px]"><Star /></span>
            </div> Popular Item
            <div className="ml-8 mr-2 w-[23px] h-[23px] inline-flex justify-center items-center rounded-full bg-orange-100 text-red-500">
              <span className="w-[15px] h-[15px]"><Spicy /></span>
            </div> Spicy
          </div>
          <h5 className="font-medium">Consumer Advisory</h5>
          <p className="mb-8 text-center text-sm italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
        </motion.div>

      </div>
    </section>
  )
};

export default Menu;