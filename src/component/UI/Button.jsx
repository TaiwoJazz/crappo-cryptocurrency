import React from 'react';

const Button = props => {
  const extraClass = props.extraClass;
  let classNames;

  if (extraClass) {
    classNames = `py-4 text-white bg-brandAcent rounded-[32px] font-medium cursor-pointer hover:opacity-80 z-20 ${extraClass}`;
  }

  return <a href={props.href} className={classNames}>{props.children}</a>
};

export default Button
