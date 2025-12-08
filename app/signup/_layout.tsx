import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Connexion",
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
};

export default SignUpLayout;
