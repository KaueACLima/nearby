import { Text, View } from "react-native";
import type { LucideProps } from "lucide-react-native";


import { colors } from "@/styles/theme";
import { s } from "./style";

type Props = {
    title: string
    description: string
    icon: React.ComponentType<LucideProps>;
}

export function Step({ title, description, icon: Icon }: Props) {
    return(
        <View style={s.container}>
            {Icon && <Icon size={32} color={colors.red.base} />}
            <View style={s.details}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}