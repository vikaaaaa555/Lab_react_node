import {$authHost, $host} from './index'

export const getPlacements = async () => {
    try {
        const {data} = await $host.get('api/placement')
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getPlacement = async (id) => {
    try {
        const {data} = await $host.get('api/placement/' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}

export const getInformations = async () => {
    try {
        const {data} = await $host.get('api/information')
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getInformation = async (id) => {
    try {
        const {data} = await $host.get('api/information/' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}

export const getInstructors = async (informationId, placementId, limit, page, search) => {
    try {
        const {data} = await $host.get('api/animal', {params: {
                informationId, placementId, limit, page, search
            }})
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getInstructor = async (id) => {
    try {
        const {data} = await $host.get('api/animal/' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getInstructorByName = async name => {
    try {
        const {data} = await $host.get('api/animal/by', {params: {
                name
            }})
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const createInstructor = async (animal) => {
    try {
        const {data} = await $authHost.post('api/animal', animal)
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const updateInstructor = async (animal) => {
    try {
        const {data} = await $authHost.put('api/animal/' + animal.id, animal)
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const deleteInstructor = async (id) => {
    try {
        const {data} = await $authHost.delete('api/animal/' + id)
        return data
    } catch (e) {
        console.log(e.message)
    }
}
export const getTime = async () => {
    try {
        const {data} = await $authHost.get('api/animal/time')
        return data
    } catch (e) {
        console.log(e.message)
    }
}