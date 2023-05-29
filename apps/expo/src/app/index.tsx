import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Stack, useRouter } from "expo-router";
// import { FlashList } from "@shopify/flash-list";
import { useAtom } from 'jotai'
import { FirebaseUserAtom, loadingAtom } from "~/utils/atoms";
import auth from '@react-native-firebase/auth'
// import { api, type RouterOutputs } from "~/utils/api";

// const PostCard: React.FC<{
//   post: RouterOutputs["post"]["all"][number];
//   onDelete: () => void;
// }> = ({ post, onDelete }) => {
//   const router = useRouter();

//   return (
//     <View className="flex flex-row rounded-lg bg-white/10 p-4">
//       <View className="flex-grow">
//         <TouchableOpacity onPress={() => router.push(`/post/${post.id}`)}>
//           <Text className="text-xl font-semibold text-pink-400">
//             {post.title}
//           </Text>
//           <Text className="mt-2 text-white">{post.content}</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={onDelete}>
//         <Text className="font-bold uppercase text-pink-400">Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CreatePost: React.FC = () => {
//   const utils = api.useContext();

//   const [title, setTitle] = React.useState("");
//   const [content, setContent] = React.useState("");

//   const { mutate, error } = api.post.create.useMutation({
//     async onSuccess() {
//       setTitle("");
//       setContent("");
//       await utils.post.all.invalidate();
//     },
//   });

//   return (
//     <View className="mt-4">
//       <TextInput
//         className="mb-2 rounded bg-white/10 p-2 text-white"
//         placeholderTextColor="rgba(255, 255, 255, 0.5)"
//         value={title}
//         onChangeText={setTitle}
//         placeholder="Title"
//       />
//       {error?.data?.zodError?.fieldErrors.title && (
//         <Text className="mb-2 text-red-500">
//           {error.data.zodError.fieldErrors.title}
//         </Text>
//       )}
//       <TextInput
//         className="mb-2 rounded bg-white/10 p-2 text-white"
//         placeholderTextColor="rgba(255, 255, 255, 0.5)"
//         value={content}
//         onChangeText={setContent}
//         placeholder="Content"
//       />
//       {error?.data?.zodError?.fieldErrors.content && (
//         <Text className="mb-2 text-red-500">
//           {error.data.zodError.fieldErrors.content}
//         </Text>
//       )}
//       <TouchableOpacity
//         className="rounded bg-pink-400 p-2"
//         onPress={() => {
//           mutate({
//             title,
//             content,
//           });
//         }}
//       >
//         <Text className="font-semibold text-white">Publish post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const Index = () => {
  // const utils = api.useContext();

  // const postQuery = api.post.all.useQuery();

  // const deletePostMutation = api.post.delete.useMutation({
  //   onSettled: () => utils.post.all.invalidate(),
  // });
  const [user, setUser] = useAtom(FirebaseUserAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  React.useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setLoading(true)
      setUser(userState)
      setLoading(false)
    })
  })
  if (loading) return <Text>Loading...</Text>
  console.log('This is Coming From Index user is', user)
  if (!user) return <Redirect href={'/auth/login'} />
  return <Redirect href={'/home'} />
};

export default Index;
