import { StyleSheet} from 'react-native';

export const colors = {
    darkBg: '#222',
    lightBg:'#333',
    darkHl: '#666',
    lighHl: '#888',
    pink: '#ea3372',
    orange: '#F97878',
    text: '#fff',
    textSec: '#aaa',
    // blue: 'rgba(rgb(226, 158, 11), green, blue, alpha)',
    // yellow: 'rgba(rgb(226, 208, 11), green, blue, alpha);',
    yellow: 'rgba(rgb(5, 85, 155), green, blue, alpha)',
    blue: 'rgba(rgb(5, 85, 155), green, blue, alpha)',
    // blue: 'rgba(rgb(233, 127, 14), green, blue, alpha)',
    realBlue: 'rgba(rgb(7, 109, 198), green, blue, alpha)',
}

export const gs = StyleSheet.create({
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.lightBg
    },
    sectionTitle:{
        fontWeight: '700',
        fontSize: 15,
        color: colors.text
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowCenter: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        borderBottomColor: '#444',
        borderWidth: 1,
        marginVertical: 24
    },
    subTitle: {
        fontWeight: '600',
        letterSpacing: 1,
        fontSize: 15,
        color: "rgba(255, 255,255, 0.6)",
        textTransform: 'uppercase',

    },
    title: {
        color: colors.text,
        fontSize: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: colors.pink
    }
})