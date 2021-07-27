import React, { createContext, useEffect, useState, useCallback } from "react";
import {getList, editList, deleteList, addList} from "./actions/list-storage";

export const ListContext = createContext();

export default function ListProvider({children}){
    const [list, setList] = useState(['test']);

    useEffect(() => {
      console.log('eeeeeeeeee : ' + list);
      getList().then(lists => setList(lists));
    }, []);

    const deleteElement = useCallback(
    item => {
        deleteList(item).then(() =>
        setList(list.filter(_item => _item._id !== item._id)),
        );
    },
    [list],
    );

    const editElement = useCallback(
    values => {
        editList(values).then(item =>
        setList(list.map(it => (it._id === item._id ? item : it))),
        );
    },
    [list],
    );

    const addElement = useCallback(
    values => {
        addList(values).then(item => setList([...list, item]));
    },
    [list],
    );

    const getItem = useCallback(
    id => {
        return list.find(it => it._id === id);
    },
    [list],
    );

    return (
    <ListContext.Provider
        value={{
        list: list ?? [],
        deleteElement,
        editElement,
        addElement,
        getItem,
        isReady: list !== undefined,
        }}>
        {children}
    </ListContext.Provider>
    );
}