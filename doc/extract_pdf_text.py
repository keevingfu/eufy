import sys
import os
try:
    from pdfminer.high_level import extract_text
except ImportError:
    print("需要安装pdfminer.six库，正在安装...")
    os.system("pip install pdfminer.six")
    from pdfminer.high_level import extract_text

def extract_pdf_text(pdf_path, output_path=None):
    """从PDF文件中提取文本内容"""
    try:
        print(f"正在从PDF文件提取文本: {pdf_path}")
        text = extract_text(pdf_path)
        
        if output_path:
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f"文本已保存到: {output_path}")
            return True
        else:
            print(text[:1000] + "...\n[文本已截断]")
            return text
    except Exception as e:
        print(f"提取文本时出错: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python extract_pdf_text.py <pdf文件路径> [输出文本文件路径]")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    extract_pdf_text(pdf_path, output_path)
