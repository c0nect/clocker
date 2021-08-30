import Head from 'next/head'

const Logo = () => {
  return (
    <img src="/logo.svg" alt="logotipo" width={200} className="p-2 inline-block" />
  )
}

const Form = () => {
  return (
    <div className="w-full max-w-xs py-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" placeholder="******************" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-6">
          <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Company url <span className="font-normal" >(clocker.work/)</span></label>
          <input type="text" id="text" placeholder="Company url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Join</button>
        </div>
      </form>
    </div>
  )
}

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Clocker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <p className="text-black p-5 normal-case font-semibold" >Create your own schedule, for free</p>
      <Form />
    </div>
  )
}

export default Home