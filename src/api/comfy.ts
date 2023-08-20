export const getComfyPipelineFromPrompt = (prompt: string) => ({
  prompt: {
    3: {
      inputs: {
        seed: Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1)),
        steps: 20,
        cfg: 8,
        sampler_name: 'euler',
        scheduler: 'normal',
        denoise: 1,
        model: ['4', 0],
        positive: ['6', 0],
        negative: ['7', 0],
        latent_image: ['5', 0],
      },
      class_type: 'KSampler',
    },
    4: {
      inputs: {
        ckpt_name: 'childrensStories_v1SemiReal.safetensors',
      },
      class_type: 'CheckpointLoaderSimple',
    },
    5: {
      inputs: {
        width: 512,
        height: 512,
        batch_size: 1,
      },
      class_type: 'EmptyLatentImage',
    },
    6: {
      inputs: {
        text: prompt,
        clip: ['4', 1],
      },
      class_type: 'CLIPTextEncode',
    },
    7: {
      inputs: {
        text: 'text, watermark',
        clip: ['4', 1],
      },
      class_type: 'CLIPTextEncode',
    },
    8: {
      inputs: {
        samples: ['3', 0],
        vae: ['4', 2],
      },
      class_type: 'VAEDecode',
    },
    9: {
      inputs: {
        filename_prefix: 'ComfyUI',
        images: ['8', 0],
      },
      class_type: 'SaveImage',
    },
  },
  extra_data: {
    extra_pnginfo: {
      workflow: {
        last_node_id: 9,
        last_link_id: 9,
        nodes: [
          {
            id: 7,
            type: 'CLIPTextEncode',
            pos: [413, 389],
            size: {
              0: 425.27801513671875,
              1: 180.6060791015625,
            },
            flags: {},
            order: 3,
            mode: 0,
            inputs: [
              {
                name: 'clip',
                type: 'CLIP',
                link: 5,
              },
            ],
            outputs: [
              {
                name: 'CONDITIONING',
                type: 'CONDITIONING',
                links: [6],
                slot_index: 0,
              },
            ],
            properties: {
              'Node name for S&R': 'CLIPTextEncode',
            },
            widgets_values: ['text, watermark'],
          },
          {
            id: 5,
            type: 'EmptyLatentImage',
            pos: [473, 609],
            size: {
              0: 315,
              1: 106,
            },
            flags: {},
            order: 0,
            mode: 0,
            outputs: [
              {
                name: 'LATENT',
                type: 'LATENT',
                links: [2],
                slot_index: 0,
              },
            ],
            properties: {
              'Node name for S&R': 'EmptyLatentImage',
            },
            widgets_values: [512, 512, 1],
          },
          {
            id: 4,
            type: 'CheckpointLoaderSimple',
            pos: [20, 322],
            size: {
              0: 315,
              1: 98,
            },
            flags: {},
            order: 1,
            mode: 0,
            outputs: [
              {
                name: 'MODEL',
                type: 'MODEL',
                links: [1],
                slot_index: 0,
              },
              {
                name: 'CLIP',
                type: 'CLIP',
                links: [3, 5],
                slot_index: 1,
              },
              {
                name: 'VAE',
                type: 'VAE',
                links: [8],
                slot_index: 2,
              },
            ],
            properties: {
              'Node name for S&R': 'CheckpointLoaderSimple',
            },
            widgets_values: ['childrensStories_v1SemiReal.safetensors'],
          },
          {
            id: 8,
            type: 'VAEDecode',
            pos: [1268, 178],
            size: {
              0: 210,
              1: 46,
            },
            flags: {},
            order: 5,
            mode: 0,
            inputs: [
              {
                name: 'samples',
                type: 'LATENT',
                link: 7,
              },
              {
                name: 'vae',
                type: 'VAE',
                link: 8,
              },
            ],
            outputs: [
              {
                name: 'IMAGE',
                type: 'IMAGE',
                links: [9],
                slot_index: 0,
              },
            ],
            properties: {
              'Node name for S&R': 'VAEDecode',
            },
          },
          {
            id: 3,
            type: 'KSampler',
            pos: [899, 96],
            size: {
              0: 315,
              1: 262,
            },
            flags: {},
            order: 4,
            mode: 0,
            inputs: [
              {
                name: 'model',
                type: 'MODEL',
                link: 1,
              },
              {
                name: 'positive',
                type: 'CONDITIONING',
                link: 4,
              },
              {
                name: 'negative',
                type: 'CONDITIONING',
                link: 6,
              },
              {
                name: 'latent_image',
                type: 'LATENT',
                link: 2,
              },
            ],
            outputs: [
              {
                name: 'LATENT',
                type: 'LATENT',
                links: [7],
                slot_index: 0,
              },
            ],
            properties: {
              'Node name for S&R': 'KSampler',
            },
            widgets_values: [
              364127582057924,
              'randomize',
              20,
              8,
              'euler',
              'normal',
              1,
            ],
          },
          {
            id: 6,
            type: 'CLIPTextEncode',
            pos: [405, 145],
            size: {
              0: 422.84503173828125,
              1: 164.31304931640625,
            },
            flags: {},
            order: 2,
            mode: 0,
            inputs: [
              {
                name: 'clip',
                type: 'CLIP',
                link: 3,
              },
            ],
            outputs: [
              {
                name: 'CONDITIONING',
                type: 'CONDITIONING',
                links: [4],
                slot_index: 0,
              },
            ],
            properties: {
              'Node name for S&R': 'CLIPTextEncode',
            },
            widgets_values: [prompt],
          },
          {
            id: 9,
            type: 'SaveImage',
            pos: [1612, 196],
            size: {
              0: 210,
              1: 270,
            },
            flags: {},
            order: 6,
            mode: 0,
            inputs: [
              {
                name: 'images',
                type: 'IMAGE',
                link: 9,
              },
            ],
            properties: {},
            widgets_values: ['ComfyUI'],
          },
        ],
        links: [
          [1, 4, 0, 3, 0, 'MODEL'],
          [2, 5, 0, 3, 3, 'LATENT'],
          [3, 4, 1, 6, 0, 'CLIP'],
          [4, 6, 0, 3, 1, 'CONDITIONING'],
          [5, 4, 1, 7, 0, 'CLIP'],
          [6, 7, 0, 3, 2, 'CONDITIONING'],
          [7, 3, 0, 8, 0, 'LATENT'],
          [8, 4, 2, 8, 1, 'VAE'],
          [9, 8, 0, 9, 0, 'IMAGE'],
        ],
        groups: [],
        config: {},
        extra: {},
        version: 0.4,
      },
    },
  },
});
