import Head from 'next/head'
import Todos from '../components/Todos';
import NewTodo from '../components/NewTodo';
import TodosProvider from '../store/todo-context';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodosProvider>
        <NewTodo />
        <Todos />
      </TodosProvider>
    </>
  )
}
