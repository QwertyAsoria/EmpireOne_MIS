import React, { useState } from 'react';
import { DeleteOutlined, DownOutlined, EditOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Modal, Menu } from 'antd';

const ButtonComponents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); 

  const handleButtonClick = () => {
    message.info('Click on left button.');
    console.log('click left button');
  };

  const handleMenuClick = (item) => {
    if (item.onClick) item.onClick();
    if (item.key === '1') setModalOpen(true); 
    if (item.key === '2') setDeleteModalOpen(true);
  };

  const items = [
    {
      label: 'Update Medicine',
      key: '1',
      icon: <EditOutlined />,
    },
    {
      label: 'Remove Medicine',
      key: '2',
      icon: <DeleteOutlined />,
    },
  ];

  return (
    <Space wrap>
      <Dropdown
        overlay={
          <Menu onClick={handleMenuClick}>
            {items.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger={['click']}
      >
        <Button type="primary">
          <Space>
            Menu
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

      <Modal
                title={<><MedicineBoxOutlined /> Update Medicine</>}
                centered
                visible={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                width={1000}
                okText="Update"
                cancelText="Cancel"
            >
                <form class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-xs font-bold mb-1 mt-2" for="grid-text">
                                Medicine
                            </label>
                            <input class="appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-text" type="text" value="Acetaminophen (Tylenol)" />
                        </div>
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-xs font-bold mb-1 mt-2" for="grid-text">
                                Medicine Type
                            </label>
                            <input class="appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-text" type="text" value="" />
                        </div>
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-xs font-bold mb-1 mt-2" for="grid-text">
                                Medicine Description
                            </label>
                            <textarea class="appearance-none block w-full  border border-gray-400 rounded py-6 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-text" type="text" value="Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, reactions to vaccinations (shots), and to reduce fever.Sep" />
                        </div>
                    </div>
                </form>
            </Modal>

      <Modal
        title="Confirm Delete"
        centered
        visible={deleteModalOpen}
        onOk={() => {
          setDeleteModalOpen(false);
        }}
        onCancel={() => setDeleteModalOpen(false)}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete <b>(Medicine)</b> ?</p>
      </Modal>
    </Space>
  );
};

export default ButtonComponents;
