// import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut } from "next-auth/react";
import { Comfortaa, Poppins } from 'next/font/google'
// import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import Main from "~/templates/Main";
import { Meta } from "~/meta/meta";
import { Heading1 } from "~/components/typography/Typography";

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

// const PostCard: React.FC<{
//   post: RouterOutputs["post"]["all"][number];
//   onPostDelete?: () => void;
// }> = ({ post, onPostDelete }) => {
//   return (
//     <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
//       <div className="flex-grow">
//         <h2 className="text-2xl font-bold text-pink-400">{post.title}</h2>
//         <p className="mt-2 text-sm">{post.content}</p>
//       </div>
//       <div>
//         <span
//           className="cursor-pointer text-sm font-bold uppercase text-pink-400"
//           onClick={onPostDelete}
//         >pnpm add @radix-ui/react-popover

//           Delete
//         </span>
//       </div>
//     </div>
//   );
// };

// const CreatePostForm: React.FC = () => {
//   const utils = api.useContext();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const { mutate, error } = api.post.create.useMutation({
//     async onSuccess() {
//       setTitle("");
//       setContent("");
//       await utils.post.all.invalidate();
//     },
//   });

//   return (
//     <div className="flex w-full max-w-2xl flex-col p-4">
//       <input
//         className="mb-2 rounded bg-white/10 p-2 text-white"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//       />
//       {error?.data?.zodError?.fieldErrors.title && (
//         <span className="mb-2 text-red-500">
//           {error.data.zodError.fieldErrors.title}
//         </span>
//       )}
//       <input
//         className="mb-2 rounded bg-white/10 p-2 text-white"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Content"
//       />
//       {error?.data?.zodError?.fieldErrors.content && (
//         <span className="mb-2 text-red-500">
//           {error.data.zodError.fieldErrors.content}
//         </span>
//       )}
//       <button
//         className="rounded bg-pink-400 p-2 font-bold"
//         onClick={() => {
//           mutate({
//             title,
//             content,
//           });
//         }}
//       >
//         Create
//       </button>
//     </div>
//   );
// };
// const postQuery = api.post.all.useQuery();

// const deletePostMutation = api.post.delete.useMutation({
//   onSettled: () => postQuery.refetch(),
// });

const Home: NextPage = () => {
  return (
    <Main meta={
      <Meta title="leadistro" description="Web App for Marketing by leadistro" />
    }>
      <div className="min-h-screen min-w-full text-leadistroWhite">
        <Heading1 textChildren="Welcome To Leadistro" />
      </div>
    </Main>
  );
};
// <>
//   <Head>
//     <title>leadistro</title>
//     <meta name="description" content="Web App for Marketing by leadistro" />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
//   <main className={`${poppins.className} flex h-screen flex-col items-center bg-gradient-to-b from-leadistroBlack/70 to-leadistroBlack text-white`}>
//     <div className="container mt-12 flex flex-col items-center justify-center gap-4 px-4 py-8">
//       <h1 className={`${comfortaa.className} text-5xl font-extrabold tracking-tight sm:text-[5rem]`}>
//         leadistro Coming Soon To Your Platform&#39;s Stores
//       </h1>
//       <Button variant={'ghost'}>Welcome</Button>
//       {/* <AuthShowcase /> */}
//     </div>
//   </main>
// </>

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: session } = api.auth.getSession.useQuery();

//   const { data: secretMessage } = api.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: !!session?.user },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       {session?.user && (
//         <p className="text-center text-2xl text-white">
//           {session && <span>Logged in as {session?.user?.name}</span>}
//           {secretMessage && <span> - {secretMessage}</span>}
//         </p>
//       )}
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={session ? () => void signOut() : () => void signIn()}
//       >
//         {session ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
