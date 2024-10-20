import { Menu } from 'antd';
import React from 'react'
import { useState } from 'react';

export default function ErfJAComponent({ data,item }) {
  const [open, setOpen] = useState(false);
  function openHandler(params) {
    window.open(`/admin/sourcing/job_title_section/job_analysis/${data?.ref_id}`, "_blank");
}
return (
    <>
        <Menu.Item onClick={() => openHandler(true)} icon={item.icon}>
            {item.label}
        </Menu.Item>
    </>
);
}
