import React from 'react';

const Anchor = props => {
  const extraClass = props.extraClass;
  let classNames;

  if (extraClass) {
    classNames = `py-4 text-white bg-brandAcent rounded-[32px] font-medium hover:opacity-80 ${extraClass}`;
  }

  return <a href={props.href} className={classNames}>{props.children}</a>
};

export default Anchor
