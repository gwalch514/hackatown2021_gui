# source https://github.com/elliotwaite/pytorch-to-javascript-with-onnx-js/blob/master/convert_to_onnx.py
import torch

# import model

def main():
  pytorch_model = Net()
  pytorch_model.load_state_dict(torch.load('pytorch_model.pt'))
  pytorch_model.eval()
  dummy_input = torch.zeros(280 * 280 * 4)
  torch.onnx.export(pytorch_model, dummy_input, 'onnx_model.onnx', verbose=True)


if __name__ == '__main__':
  main()
