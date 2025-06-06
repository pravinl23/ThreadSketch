import { create } from "zustand"

export const useStore = create((set, get) => ({
  // Garment and template state
  selectedGarment: null,
  garmentTemplates: [
    {
      id: "tee",
      name: "T-Shirt",
      image: "/clothes/Tee.png",
      frontImage: "/clothes/Tee.png",
      backImage: "/clothes/Tee 2.png",
    },
    {
      id: "hoodie",
      name: "Hoodie",
      image: "/clothes/Hoodie.png",
      frontImage: "/clothes/Hoodie.png",
      backImage: "/clothes/Hoodie.png",
    },
    {
      id: "tank",
      name: "Tank Top",
      image: "/clothes/Tank Top 1.png",
      frontImage: "/clothes/Tank Top 1.png",
      backImage: "/clothes/Tank Top 1.png",
    },
    {
      id: "sweater",
      name: "Sweater",
      image: "/clothes/Sweater New.png",
      frontImage: "/clothes/Sweater New.png",
      backImage: "/clothes/Sweater New.png",
    },
    {
      id: "zip-hoodie",
      name: "Zip Hoodie",
      image: "/clothes/Zip Hoodie 4.png",
      frontImage: "/clothes/Zip Hoodie 4.png",
      backImage: "/clothes/Zip Hoodie 4.png",
    },
    {
      id: "jacket",
      name: "Work Jacket",
      image: "/clothes/Work Jacket.png",
      frontImage: "/clothes/Work Jacket.png",
      backImage: "/clothes/Work Jacket.png",
    },
    {
      id: "shorts",
      name: "Shorts",
      image: "/clothes/Shorts.png",
      frontImage: "/clothes/Shorts.png",
      backImage: "/clothes/Shorts.png",
    },
    {
      id: "jeans",
      name: "Jeans",
      image: "/clothes/Jeans 2.png",
      frontImage: "/clothes/Jeans 2.png",
      backImage: "/clothes/Jeans 2.png",
    },
    {
      id: "sweats",
      name: "Sweatpants",
      image: "/clothes/Sweats 3.png",
      frontImage: "/clothes/Sweats 3.png",
      backImage: "/clothes/Sweats 3.png",
    },
  ],

  // Canvas state
  activeView: "front", // 'front' or 'back'
  frontCanvasRef: null,
  backCanvasRef: null,

  // Tool state
  selectedTool: "brush",
  selectedColor: "#000000",
  brushSize: 4,

  // AI and processing state
  isProcessingAI: false,
  aiProgress: null,

  // Thread It preview state
  previewUrl: null,
  isThreading: false,

  // UI state
  showTemplateSelector: true,
  showToolbar: true,

  // Actions
  setSelectedGarment: (garment) => set({ selectedGarment: garment, showTemplateSelector: false }),
  setActiveView: (view) => set({ activeView: view }),
  setFrontCanvasRef: (ref) => set({ frontCanvasRef: ref }),
  setBackCanvasRef: (ref) => set({ backCanvasRef: ref }),
  setSelectedTool: (tool) => set({ selectedTool: tool }),
  setSelectedColor: (color) => set({ selectedColor: color }),
  setBrushSize: (size) => set({ brushSize: size }),
  setIsProcessingAI: (processing) => set({ isProcessingAI: processing }),
  setAiProgress: (progress) => set({ aiProgress: progress }),
  setShowTemplateSelector: (show) => set({ showTemplateSelector: show }),
  setShowToolbar: (show) => set({ showToolbar: show }),

  // Thread It actions
  setPreviewUrl: (url) => set({ previewUrl: url }),
  setIsThreading: (threading) => set({ isThreading: threading }),

  // Get current active canvas ref
  getActiveCanvasRef: () => {
    const state = get()
    return state.activeView === "front" ? state.frontCanvasRef : state.backCanvasRef
  },

  // Reset to template selection
  resetToTemplateSelection: () =>
    set({
      selectedGarment: null,
      showTemplateSelector: true,
      activeView: "front",
    }),

  // Magic Wand - AI Enhancement
  enhanceDrawing: async () => {
    const state = get()

    set({ isProcessingAI: true, aiProgress: "Preparing your sketch..." })

    try {
      // Simulate AI processing for now
      set({ aiProgress: "AI is analyzing your design..." })
      await new Promise((resolve) => setTimeout(resolve, 1500))

      set({ aiProgress: "Enhancing artwork..." })
      await new Promise((resolve) => setTimeout(resolve, 1500))

      set({ aiProgress: "Finalizing details..." })
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For now, just show completion message
      set({ aiProgress: "Enhancement complete!" })
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error) {
      console.error("AI enhancement failed:", error)
      set({ aiProgress: "Enhancement failed. Please try again." })
    } finally {
      set({ isProcessingAI: false, aiProgress: null })
    }
  },

  // Save current design
  saveDesign: () => {
    const state = get()
    // Implementation for saving design
    console.log("Saving design for garment:", state.selectedGarment?.name)
  },

  // Export design
  exportDesign: () => {
    const state = get()
    // Implementation for exporting design
    console.log("Exporting design for garment:", state.selectedGarment?.name)
  },
}))
