import org.graalvm.compiler.asm.aarch64.AArch64Assembler.SystemHint;

public class BubbleSort {

    public static void main(String[] args) {
        int[] a = { 33, 44, 11, 65, 34, 54, 13, 234, 101 };
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a.length; j++) {
                if (a[i] < a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }

        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }

    }
}
