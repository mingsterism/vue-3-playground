import {computed, ref, toRefs, watch} from "vue";
import {getData} from "../utils";

const userRepos = (props) => {
    const repositories = ref([])
    const friends = ref([])
    let counter = ref(0)
    const {user} = toRefs(props)
    console.log("PROPS: ", props)
    const getUserData = async (val, oldVal) => {
        console.log("--------", val)
        console.log("OLD VAL: ", oldVal)
        console.log("1 Getting user data", user.value)
        const result = await getData(user.value)
        return result
    }

    const getNewCounter = (val, oldVal) => {
        console.log(val, oldVal)
    }

    // onMounted(getUserData)
    watch(friends.value, getUserData)
    watch(counter, getNewCounter)

    const foo = () => {
        console.log("FOO", friends.value.push("yoo"))
        // friends.push("heyy")
    }
    const handleCounter= (event, type) => {
        if (type === "MINUS") {
            console.log("MINUSING")
        } else if (type === "ADD") {
            console.log("ADDING calling from composition api")
        }
    }
    const addCounter = () => {
        console.log("ADDING")
        counter.value = counter.value + 1
    }

    const counterIsEven = computed(() => {
        return counter.value % 2 == 0
    })

    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
        return repositories.value.filter(
            repository => repository.name.includes(searchQuery.value)
        )
    })

    return {
        getUserData,
        repositories,
        searchQuery,
        repositoriesMatchingSearchQuery,
        foo,
        addCounter,
        counter,
        counterIsEven,
        friends,
        handleCounter
    }
}

// module.exports = {userRepos}
export default userRepos