public class MergeSort {

   /*
    * This is my first java program. This will print 'Hello World' as the output
    */

   void merge(int arr[]) {

   }

   void sort(int arr[], int l, int r) {

   }

   public static void main(String[] args) {

      int arr[] = { 12, 11, 13, 5, 6, 7 };
      MergeSort ms = new MergeSort();

      ms.sort(arr, 0, arr.length - 1);
      System.out.println("\nSorted array"); 
      printArray(arr);

   }

   /* A utility function to print array of size n */
   static void printArray(int arr[]) {
      int n = arr.length;
      for (int i = 0; i < n; ++i)
         System.out.print(arr[i] + " ");
      System.out.println();
   }

}
