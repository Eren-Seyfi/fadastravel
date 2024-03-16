"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/framesync.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst defaultTimestep = 1 / 60 * 1000;\nconst getCurrentTime = typeof performance !== \"undefined\" ? ()=>performance.now() : ()=>Date.now();\nconst onNextFrame =  false ? 0 : (callback)=>setTimeout(()=>callback(getCurrentTime()), defaultTimestep);\nfunction createRenderStep(runNextFrame) {\n    let toRun = [];\n    let toRunNextFrame = [];\n    let numToRun = 0;\n    let isProcessing = false;\n    let flushNextFrame = false;\n    const toKeepAlive = new WeakSet();\n    const step = {\n        schedule: (callback, keepAlive = false, immediate = false)=>{\n            const addToCurrentFrame = immediate && isProcessing;\n            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive) toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing) numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: (callback)=>{\n            const index = toRunNextFrame.indexOf(callback);\n            if (index !== -1) toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: (frameData)=>{\n            if (isProcessing) {\n                flushNextFrame = true;\n                return;\n            }\n            isProcessing = true;\n            [toRun, toRunNextFrame] = [\n                toRunNextFrame,\n                toRun\n            ];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for(let i = 0; i < numToRun; i++){\n                    const callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n            if (flushNextFrame) {\n                flushNextFrame = false;\n                step.process(frameData);\n            }\n        }\n    };\n    return step;\n}\nconst maxElapsed = 40;\nlet useDefaultElapsed = true;\nlet runNextFrame = false;\nlet isProcessing = false;\nconst frame = {\n    delta: 0,\n    timestamp: 0\n};\nconst stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\"\n];\nconst steps = stepsOrder.reduce((acc, key)=>{\n    acc[key] = createRenderStep(()=>runNextFrame = true);\n    return acc;\n}, {});\nconst sync = stepsOrder.reduce((acc, key)=>{\n    const step = steps[key];\n    acc[key] = (process, keepAlive = false, immediate = false)=>{\n        if (!runNextFrame) startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nconst cancelSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nconst flushSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = ()=>steps[key].process(frame);\n    return acc;\n}, {});\nconst processStep = (stepId)=>steps[stepId].process(frame);\nconst processFrame = (timestamp)=>{\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        onNextFrame(processFrame);\n    }\n};\nconst startLoop = ()=>{\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing) onNextFrame(processFrame);\n};\nconst getFrameData = ()=>frame;\nexports.cancelSync = cancelSync;\nexports[\"default\"] = sync;\nexports.flushSync = flushSync;\nexports.getFrameData = getFrameData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUU3RCxNQUFNQyxrQkFBa0IsSUFBSyxLQUFNO0FBQ25DLE1BQU1DLGlCQUFpQixPQUFPQyxnQkFBZ0IsY0FDeEMsSUFBTUEsWUFBWUMsR0FBRyxLQUNyQixJQUFNQyxLQUFLRCxHQUFHO0FBQ3BCLE1BQU1FLGNBQWMsTUFBNkIsR0FDM0MsQ0FBb0RDLEdBQ3BELENBQUNBLFdBQWFHLFdBQVcsSUFBTUgsU0FBU0wsbUJBQW1CRDtBQUVqRSxTQUFTVSxpQkFBaUJDLFlBQVk7SUFDbEMsSUFBSUMsUUFBUSxFQUFFO0lBQ2QsSUFBSUMsaUJBQWlCLEVBQUU7SUFDdkIsSUFBSUMsV0FBVztJQUNmLElBQUlDLGVBQWU7SUFDbkIsSUFBSUMsaUJBQWlCO0lBQ3JCLE1BQU1DLGNBQWMsSUFBSUM7SUFDeEIsTUFBTUMsT0FBTztRQUNUQyxVQUFVLENBQUNkLFVBQVVlLFlBQVksS0FBSyxFQUFFQyxZQUFZLEtBQUs7WUFDckQsTUFBTUMsb0JBQW9CRCxhQUFhUDtZQUN2QyxNQUFNUyxTQUFTRCxvQkFBb0JYLFFBQVFDO1lBQzNDLElBQUlRLFdBQ0FKLFlBQVlRLEdBQUcsQ0FBQ25CO1lBQ3BCLElBQUlrQixPQUFPRSxPQUFPLENBQUNwQixjQUFjLENBQUMsR0FBRztnQkFDakNrQixPQUFPRyxJQUFJLENBQUNyQjtnQkFDWixJQUFJaUIscUJBQXFCUixjQUNyQkQsV0FBV0YsTUFBTWdCLE1BQU07WUFDL0I7WUFDQSxPQUFPdEI7UUFDWDtRQUNBdUIsUUFBUSxDQUFDdkI7WUFDTCxNQUFNd0IsUUFBUWpCLGVBQWVhLE9BQU8sQ0FBQ3BCO1lBQ3JDLElBQUl3QixVQUFVLENBQUMsR0FDWGpCLGVBQWVrQixNQUFNLENBQUNELE9BQU87WUFDakNiLFlBQVllLE1BQU0sQ0FBQzFCO1FBQ3ZCO1FBQ0EyQixTQUFTLENBQUNDO1lBQ04sSUFBSW5CLGNBQWM7Z0JBQ2RDLGlCQUFpQjtnQkFDakI7WUFDSjtZQUNBRCxlQUFlO1lBQ2YsQ0FBQ0gsT0FBT0MsZUFBZSxHQUFHO2dCQUFDQTtnQkFBZ0JEO2FBQU07WUFDakRDLGVBQWVlLE1BQU0sR0FBRztZQUN4QmQsV0FBV0YsTUFBTWdCLE1BQU07WUFDdkIsSUFBSWQsVUFBVTtnQkFDVixJQUFLLElBQUlxQixJQUFJLEdBQUdBLElBQUlyQixVQUFVcUIsSUFBSztvQkFDL0IsTUFBTTdCLFdBQVdNLEtBQUssQ0FBQ3VCLEVBQUU7b0JBQ3pCN0IsU0FBUzRCO29CQUNULElBQUlqQixZQUFZbUIsR0FBRyxDQUFDOUIsV0FBVzt3QkFDM0JhLEtBQUtDLFFBQVEsQ0FBQ2Q7d0JBQ2RLO29CQUNKO2dCQUNKO1lBQ0o7WUFDQUksZUFBZTtZQUNmLElBQUlDLGdCQUFnQjtnQkFDaEJBLGlCQUFpQjtnQkFDakJHLEtBQUtjLE9BQU8sQ0FBQ0M7WUFDakI7UUFDSjtJQUNKO0lBQ0EsT0FBT2Y7QUFDWDtBQUVBLE1BQU1rQixhQUFhO0FBQ25CLElBQUlDLG9CQUFvQjtBQUN4QixJQUFJM0IsZUFBZTtBQUNuQixJQUFJSSxlQUFlO0FBQ25CLE1BQU13QixRQUFRO0lBQ1ZDLE9BQU87SUFDUEMsV0FBVztBQUNmO0FBQ0EsTUFBTUMsYUFBYTtJQUNmO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSDtBQUNELE1BQU1DLFFBQVFELFdBQVdFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztJQUNsQ0QsR0FBRyxDQUFDQyxJQUFJLEdBQUdwQyxpQkFBaUIsSUFBT0MsZUFBZTtJQUNsRCxPQUFPa0M7QUFDWCxHQUFHLENBQUM7QUFDSixNQUFNRSxPQUFPTCxXQUFXRSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7SUFDakMsTUFBTTNCLE9BQU93QixLQUFLLENBQUNHLElBQUk7SUFDdkJELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQUNiLFNBQVNaLFlBQVksS0FBSyxFQUFFQyxZQUFZLEtBQUs7UUFDckQsSUFBSSxDQUFDWCxjQUNEcUM7UUFDSixPQUFPN0IsS0FBS0MsUUFBUSxDQUFDYSxTQUFTWixXQUFXQztJQUM3QztJQUNBLE9BQU91QjtBQUNYLEdBQUcsQ0FBQztBQUNKLE1BQU1JLGFBQWFQLFdBQVdFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztJQUN2Q0QsR0FBRyxDQUFDQyxJQUFJLEdBQUdILEtBQUssQ0FBQ0csSUFBSSxDQUFDakIsTUFBTTtJQUM1QixPQUFPZ0I7QUFDWCxHQUFHLENBQUM7QUFDSixNQUFNSyxZQUFZUixXQUFXRSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7SUFDdENELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLElBQU1ILEtBQUssQ0FBQ0csSUFBSSxDQUFDYixPQUFPLENBQUNNO0lBQ3BDLE9BQU9NO0FBQ1gsR0FBRyxDQUFDO0FBQ0osTUFBTU0sY0FBYyxDQUFDQyxTQUFXVCxLQUFLLENBQUNTLE9BQU8sQ0FBQ25CLE9BQU8sQ0FBQ007QUFDdEQsTUFBTWMsZUFBZSxDQUFDWjtJQUNsQjlCLGVBQWU7SUFDZjRCLE1BQU1DLEtBQUssR0FBR0Ysb0JBQ1J0QyxrQkFDQXNELEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS0UsR0FBRyxDQUFDZixZQUFZRixNQUFNRSxTQUFTLEVBQUVKLGFBQWE7SUFDbEVFLE1BQU1FLFNBQVMsR0FBR0E7SUFDbEIxQixlQUFlO0lBQ2YyQixXQUFXZSxPQUFPLENBQUNOO0lBQ25CcEMsZUFBZTtJQUNmLElBQUlKLGNBQWM7UUFDZDJCLG9CQUFvQjtRQUNwQmpDLFlBQVlnRDtJQUNoQjtBQUNKO0FBQ0EsTUFBTUwsWUFBWTtJQUNkckMsZUFBZTtJQUNmMkIsb0JBQW9CO0lBQ3BCLElBQUksQ0FBQ3ZCLGNBQ0RWLFlBQVlnRDtBQUNwQjtBQUNBLE1BQU1LLGVBQWUsSUFBTW5CO0FBRTNCekMsa0JBQWtCLEdBQUdtRDtBQUNyQm5ELGtCQUFlLEdBQUdpRDtBQUNsQmpELGlCQUFpQixHQUFHb0Q7QUFDcEJwRCxvQkFBb0IsR0FBRzREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFkYXN0cmF2ZWwvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmNqcy5qcz9jMGIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgZGVmYXVsdFRpbWVzdGVwID0gKDEgLyA2MCkgKiAxMDAwO1xuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xuY29uc3Qgb25OZXh0RnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spXG4gICAgOiAoY2FsbGJhY2spID0+IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soZ2V0Q3VycmVudFRpbWUoKSksIGRlZmF1bHRUaW1lc3RlcCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAocnVuTmV4dEZyYW1lKSB7XG4gICAgbGV0IHRvUnVuID0gW107XG4gICAgbGV0IHRvUnVuTmV4dEZyYW1lID0gW107XG4gICAgbGV0IG51bVRvUnVuID0gMDtcbiAgICBsZXQgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgbGV0IGZsdXNoTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgY29uc3QgdG9LZWVwQWxpdmUgPSBuZXcgV2Vha1NldCgpO1xuICAgIGNvbnN0IHN0ZXAgPSB7XG4gICAgICAgIHNjaGVkdWxlOiAoY2FsbGJhY2ssIGtlZXBBbGl2ZSA9IGZhbHNlLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkVG9DdXJyZW50RnJhbWUgPSBpbW1lZGlhdGUgJiYgaXNQcm9jZXNzaW5nO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYWRkVG9DdXJyZW50RnJhbWUgPyB0b1J1biA6IHRvUnVuTmV4dEZyYW1lO1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSlcbiAgICAgICAgICAgICAgICB0b0tlZXBBbGl2ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGFkZFRvQ3VycmVudEZyYW1lICYmIGlzUHJvY2Vzc2luZylcbiAgICAgICAgICAgICAgICAgICAgbnVtVG9SdW4gPSB0b1J1bi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICB0b1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdG9LZWVwQWxpdmUuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2VzczogKGZyYW1lRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2luZykge1xuICAgICAgICAgICAgICAgIGZsdXNoTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgW3RvUnVuLCB0b1J1bk5leHRGcmFtZV0gPSBbdG9SdW5OZXh0RnJhbWUsIHRvUnVuXTtcbiAgICAgICAgICAgIHRvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBudW1Ub1J1biA9IHRvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChudW1Ub1J1bikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVG9SdW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRvUnVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmcmFtZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwQWxpdmUuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5OZXh0RnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGZsdXNoTmV4dEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmx1c2hOZXh0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGVwLnByb2Nlc3MoZnJhbWVEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBzdGVwO1xufVxuXG5jb25zdCBtYXhFbGFwc2VkID0gNDA7XG5sZXQgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xubGV0IHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuY29uc3QgZnJhbWUgPSB7XG4gICAgZGVsdGE6IDAsXG4gICAgdGltZXN0YW1wOiAwLFxufTtcbmNvbnN0IHN0ZXBzT3JkZXIgPSBbXG4gICAgXCJyZWFkXCIsXG4gICAgXCJ1cGRhdGVcIixcbiAgICBcInByZVJlbmRlclwiLFxuICAgIFwicmVuZGVyXCIsXG4gICAgXCJwb3N0UmVuZGVyXCIsXG5dO1xuY29uc3Qgc3RlcHMgPSBzdGVwc09yZGVyLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IGNyZWF0ZVJlbmRlclN0ZXAoKCkgPT4gKHJ1bk5leHRGcmFtZSA9IHRydWUpKTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3Qgc3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBzdGVwc1trZXldO1xuICAgIGFjY1trZXldID0gKHByb2Nlc3MsIGtlZXBBbGl2ZSA9IGZhbHNlLCBpbW1lZGlhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIXJ1bk5leHRGcmFtZSlcbiAgICAgICAgICAgIHN0YXJ0TG9vcCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5zY2hlZHVsZShwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgY2FuY2VsU3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gc3RlcHNba2V5XS5jYW5jZWw7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmNvbnN0IGZsdXNoU3luYyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gKCkgPT4gc3RlcHNba2V5XS5wcm9jZXNzKGZyYW1lKTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgcHJvY2Vzc1N0ZXAgPSAoc3RlcElkKSA9PiBzdGVwc1tzdGVwSWRdLnByb2Nlc3MoZnJhbWUpO1xuY29uc3QgcHJvY2Vzc0ZyYW1lID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xuICAgIGZyYW1lLmRlbHRhID0gdXNlRGVmYXVsdEVsYXBzZWRcbiAgICAgICAgPyBkZWZhdWx0VGltZXN0ZXBcbiAgICAgICAgOiBNYXRoLm1heChNYXRoLm1pbih0aW1lc3RhbXAgLSBmcmFtZS50aW1lc3RhbXAsIG1heEVsYXBzZWQpLCAxKTtcbiAgICBmcmFtZS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBzdGVwc09yZGVyLmZvckVhY2gocHJvY2Vzc1N0ZXApO1xuICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGlmIChydW5OZXh0RnJhbWUpIHtcbiAgICAgICAgdXNlRGVmYXVsdEVsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgb25OZXh0RnJhbWUocHJvY2Vzc0ZyYW1lKTtcbiAgICB9XG59O1xuY29uc3Qgc3RhcnRMb29wID0gKCkgPT4ge1xuICAgIHJ1bk5leHRGcmFtZSA9IHRydWU7XG4gICAgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xuICAgIGlmICghaXNQcm9jZXNzaW5nKVxuICAgICAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xufTtcbmNvbnN0IGdldEZyYW1lRGF0YSA9ICgpID0+IGZyYW1lO1xuXG5leHBvcnRzLmNhbmNlbFN5bmMgPSBjYW5jZWxTeW5jO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3luYztcbmV4cG9ydHMuZmx1c2hTeW5jID0gZmx1c2hTeW5jO1xuZXhwb3J0cy5nZXRGcmFtZURhdGEgPSBnZXRGcmFtZURhdGE7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0VGltZXN0ZXAiLCJnZXRDdXJyZW50VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsIm9uTmV4dEZyYW1lIiwiY2FsbGJhY2siLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiY3JlYXRlUmVuZGVyU3RlcCIsInJ1bk5leHRGcmFtZSIsInRvUnVuIiwidG9SdW5OZXh0RnJhbWUiLCJudW1Ub1J1biIsImlzUHJvY2Vzc2luZyIsImZsdXNoTmV4dEZyYW1lIiwidG9LZWVwQWxpdmUiLCJXZWFrU2V0Iiwic3RlcCIsInNjaGVkdWxlIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwiYWRkVG9DdXJyZW50RnJhbWUiLCJidWZmZXIiLCJhZGQiLCJpbmRleE9mIiwicHVzaCIsImxlbmd0aCIsImNhbmNlbCIsImluZGV4Iiwic3BsaWNlIiwiZGVsZXRlIiwicHJvY2VzcyIsImZyYW1lRGF0YSIsImkiLCJoYXMiLCJtYXhFbGFwc2VkIiwidXNlRGVmYXVsdEVsYXBzZWQiLCJmcmFtZSIsImRlbHRhIiwidGltZXN0YW1wIiwic3RlcHNPcmRlciIsInN0ZXBzIiwicmVkdWNlIiwiYWNjIiwia2V5Iiwic3luYyIsInN0YXJ0TG9vcCIsImNhbmNlbFN5bmMiLCJmbHVzaFN5bmMiLCJwcm9jZXNzU3RlcCIsInN0ZXBJZCIsInByb2Nlc3NGcmFtZSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJmb3JFYWNoIiwiZ2V0RnJhbWVEYXRhIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/framesync.cjs.js\n");

/***/ })

};
;