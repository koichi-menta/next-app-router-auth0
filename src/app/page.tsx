"use client";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate, PostIcon } from "../components/post";
export default function Home() {
  return (
    <Admin
      dataProvider={jsonServerProvider("https://jsonplaceholder.typicode.com")}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  );
}
