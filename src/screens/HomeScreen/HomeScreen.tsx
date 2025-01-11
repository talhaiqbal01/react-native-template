import {ThemedView} from "../../components/ThemedView";
import {ThemedText} from "../../components/ThemedText";
import {TextTypes} from "../../utils/constants/TextTypes";
import {Texts} from "../../utils/constants/Texts";
import {Sizes} from "../../utils/constants/Sizes";


const HomeScreen= () => {
    return (
        <ThemedView style={{flex: 1, padding: Sizes.sm}}>
            <ThemedText type={TextTypes.headlineLarge}>{Texts.homeTitle}</ThemedText>
        </ThemedView>
    );
}

export default HomeScreen;