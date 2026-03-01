let CustNode = class {
    constructor(value = null, nexNode = null) {
        this.value = value
        this.nexNode = nexNode
    }
    edit(value, nexNode = this.nexNode) {
        this.value = value
        this.nexNode = nexNode
    }
    nexNode() {
        return nexNode
    }
}

let LinkedList = function () {
    let list = {
        head: null,
        size: 0
    }

    let last = null

    let module = {
        append: function append(value, node = list.head) {
            if (node === null) {
                list.size++
                list.head = new CustNode(value, null);
                return
            }
            if (node.nexNode === null) {
                list.size++
                node.nexNode = new CustNode(value, null)
            }
            else {
                append(value, node.nexNode)
            }
        },
        prepend: (value) => {
            let prev = list.head
            list.head = new CustNode(value, prev, 0);
            list.size++
        },
        size: () => { return list.size },
        head: () => {
            if (list.head === null) return undefined
            return list.head.value
        },
        at: (index) => {
            if (index === undefined) return undefined
            if (index === 0) return list.head.value
            if (index === list.size) return undefined
            let ant = list.head
            let curr;
            for (let i = 0; i < index; i++) {
                curr = ant.nexNode
                ant = curr
            }
            return curr.value
        },
        tail: () => {
            if (list.head === null) return undefined
            return module.at(list.size - 1)
        },
        pop: function pop(value = list.head) {
            if (list.head === null) return undefined
            if (value.nexNode.nexNode === null) {
                last = JSON.parse(JSON.stringify(value.nexNode))
                value.nexNode = null
                list.size--
            }
            else pop(value.nexNode)
            return last.value
        },
        constains: function contains(value, node = list.head) {
            if (list.head === null) return false
            if (node.value === value) return true
            if (node.nexNode === null) return false
            return contains(value, node.nexNode)
        },
        findIndex: function findIndex(value, node = list.head, index = 0) {
            if (list.head === null) return -1
            if (node.value === value) return index
            if (node.nexNode === null) return -1
            return findIndex(value, node.nexNode, index + 1)
        },
        toString: function toString(node = list.head, str = '') { 
            let string = `(${node.value}) -> `
            if (list.head === null) return string + 'null'
            if (node.nexNode === null) return str + string + 'null'
            return toString(node.nexNode, str + string)
        }
        // insertAt(index, ...values) { }
        // removeAt(index) { }
    }
    return module
}

// let list = new LinkedList()

// list.append('Dog')
// list.append('Cat')
// list.append('Leon')
// list.append('fish')
// list.prepend('human')
// // console.log(list.size())
// // console.log(list.pop())
// // console.log(list.tail())
// // console.log(list.toString())



