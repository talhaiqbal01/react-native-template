import {ThemedView} from "../../../../components/ThemedView";
import {Sizes} from "../../../../utils/constants/Sizes";
import {MainLogo} from "../../../../components/MainLogo";
import {ThemedText} from "../../../../components/ThemedText";
import {ThemedIcon} from "../../../../components/ThemedIcon";
import {TextTypes} from "../../../../utils/constants/TextTypes";
import {Texts} from "../../../../utils/constants/Texts";
import {ElevatedButton} from "../../../../components/ElevatedButton";

const HomeScreen= () => {
    return (
        <ThemedView style={{flex: 1, padding: Sizes.sm}}>
            <MainLogo />
            <ThemedText type={TextTypes.headlineLarge}>{Texts.homeTitle}</ThemedText>
            <ThemedIcon/>
            <ElevatedButton title="Elevated Button" onPress={() => {}} />
        </ThemedView>
    );
}

export default HomeScreen;